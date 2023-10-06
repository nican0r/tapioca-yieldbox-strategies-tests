// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

import "@boringcrypto/boring-solidity/contracts/interfaces/IERC20.sol";
import "@boringcrypto/boring-solidity/contracts/libraries/BoringERC20.sol";
import "@boringcrypto/boring-solidity/contracts/BoringOwnable.sol";

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";

import "tapioca-sdk/dist/contracts/YieldBox/contracts/enums/YieldBoxTokenType.sol";
import "tapioca-sdk/dist/contracts/YieldBox/contracts/strategies/BaseStrategy.sol";

import "../interfaces/IFeeCollector.sol";
import "../interfaces/gmx/IGlpManager.sol";
import "../interfaces/gmx/IGmxRewardDistributor.sol";
import "../interfaces/gmx/IGmxRewardRouter.sol";
import "../interfaces/gmx/IGmxRewardTracker.sol";
import "../interfaces/gmx/IGmxVester.sol";
import "../interfaces/gmx/IGmxVault.sol";
import "../../tapioca-periph/contracts/interfaces/IOracle.sol";

// NOTE: Specific to a UniV3 pool!! This will not work on Avalanche!
contract GlpStrategy is BaseERC20Strategy, BoringOwnable {
    using BoringERC20 for IERC20;

    string public constant override name = "sGLP";
    string public constant override description =
        "Holds staked GLP tokens and compounds the rewards";

    IERC20 private immutable gmx;
    IERC20 private immutable weth;

    IGmxRewardTracker private immutable feeGmxTracker;
    IGlpManager private immutable glpManager;
    IGmxRewardRouterV2 private immutable glpRewardRouter;
    IGmxRewardRouterV2 private immutable gmxRewardRouter;
    IGmxVester private immutable glpVester;
    IGmxRewardTracker private immutable stakedGlpTracker;
    IGmxRewardTracker private immutable stakedGmxTracker;

    IUniswapV3Pool private constant gmxWethPool =
        IUniswapV3Pool(0x80A9ae39310abf666A87C743d6ebBD0E8C42158E);
    uint160 internal constant UNI_MIN_SQRT_RATIO = 4295128739;
    uint160 internal constant UNI_MAX_SQRT_RATIO =
        1461446703485210103287273052203988822378723970342;

    uint256 internal constant FEE_BPS = 100;
    address public feeRecipient;
    uint256 public feesPending;

    bool public paused;

    IOracle public wethUsdgOracle;
    bytes public wethUsdgOracleData;

    IOracle public wethGlpOracle;
    bytes public wethGlpOracleData;

    IOracle public gmxGlpOracle;
    bytes public gmxGlpOracleData;

    uint256 private _slippage = 50;

    constructor(
        IYieldBox _yieldBox,
        IGmxRewardRouterV2 _gmxRewardRouter,
        IGmxRewardRouterV2 _glpRewardRouter,
        IERC20 _sGlp,
        IOracle _wethUsdgOracle,
        bytes memory _wethUsdgOracleData,
        IOracle _wethGlpOracle,
        bytes memory _wethGlpOracleData,
        IOracle _gmxGlpOracle,
        bytes memory _gmxGlpOracleData
    ) BaseERC20Strategy(_yieldBox, address(_sGlp)) {
        weth = IERC20(_yieldBox.wrappedNative());
        require(address(weth) == _gmxRewardRouter.weth(), "WETH mismatch");

        require(_glpRewardRouter.gmx() == address(0), "Bad GLP reward router");
        glpRewardRouter = _glpRewardRouter;

        address _gmx = _gmxRewardRouter.gmx();
        require(_gmx != address(0), "Bad GMX reward router");
        gmxRewardRouter = _gmxRewardRouter;
        gmx = IERC20(_gmx);

        stakedGlpTracker = IGmxRewardTracker(
            glpRewardRouter.stakedGlpTracker()
        );
        stakedGmxTracker = IGmxRewardTracker(
            gmxRewardRouter.stakedGmxTracker()
        );
        feeGmxTracker = IGmxRewardTracker(gmxRewardRouter.feeGmxTracker());
        glpManager = IGlpManager(glpRewardRouter.glpManager());
        glpVester = IGmxVester(gmxRewardRouter.glpVester());

        feeRecipient = owner;

        wethUsdgOracle = _wethUsdgOracle;
        wethUsdgOracleData = _wethUsdgOracleData;
        wethGlpOracle = _wethGlpOracle;
        wethGlpOracleData = _wethGlpOracleData;
        gmxGlpOracle = _gmxGlpOracle;
        gmxGlpOracleData = _gmxGlpOracleData;
    }

    // (For the GMX-ETH pool)
    function uniswapV3SwapCallback(
        int256 /* amount0Delta */,
        int256 /* amount1Delta */,
        bytes calldata data
    ) external {
        require(msg.sender == address(gmxWethPool), "Not the pool");
        uint256 amount = abi.decode(data, (uint256));
        gmx.safeTransfer(address(gmxWethPool), amount);
    }

    function harvest() public {
        _claimRewards();
        _buyGlp();
    }

    /// @notice sets the slippage used in swap operations
    /// @param _val the new slippage amount
    function setSlippage(uint256 _val) external onlyOwner {
        _slippage = _val;
    }

    /// @notice updates the pause state
    /// @param _val the new state
    function updatePaused(bool _val) external onlyOwner {
        paused = _val;
    }

    function harvestGmx(
        uint256 priceNum,
        uint256 priceDenom
    ) external onlyOwner {
        _claimRewards();
        _sellGmx(priceNum, priceDenom);
        _buyGlp();
    }

    function setFeeRecipient(address recipient) external onlyOwner {
        feeRecipient = recipient;
    }

    function withdrawFees() external {
        uint256 feeAmount = feesPending;
        if (feeAmount > 0) {
            uint256 wethAmount = weth.balanceOf(address(this));
            if (wethAmount < feeAmount) {
                feeAmount = wethAmount;
            }
            weth.safeTransfer(feeRecipient, feeAmount);
            feesPending -= feeAmount;
        }
    }

    /// @notice withdraws everythig from the strategy
    function emergencyWithdraw() external onlyOwner returns (uint256 result) {
        _claimRewards();
        _buyGlp();
        uint256 freeGlp = stakedGlpTracker.balanceOf(address(this));
        if (freeGlp > 0) {
            glpVester.withdraw();
        }

        result = IERC20(contractAddress).balanceOf(address(this));
        paused = true;
    }

    function _currentBalance() internal view override returns (uint256 amount) {
        // This _should_ included both free and "reserved" GLP:
        amount = IERC20(contractAddress).balanceOf(address(this));

        uint256 claimableGmx = glpVester.claimable(address(this));
        (bool success, uint256 gmxPrice) = gmxGlpOracle.peek(gmxGlpOracleData);
        require(success, "Glp: oracle call failed");
        uint256 claimableGlp = (claimableGmx * gmxPrice) / 1e18;

        amount += claimableGlp;
    }

    function _deposited(uint256 /* amount */) internal override {
        require(!paused, "Glp: paused");
        harvest();
    }

    function _withdraw(address to, uint256 amount) internal override {
        _claimRewards();
        _buyGlp();
        uint256 freeGlp = stakedGlpTracker.balanceOf(address(this));
        if (freeGlp < amount) {
            // Reverts if none are vesting, but in that case the whole TX will
            // revert anyway for withdrawing too much:
            glpVester.withdraw();
        }
        // Call this first; `_vestByGlp()` will lock the GLP again
        require(amount > 0, "Strategy: amount is 0");
        IERC20(contractAddress).safeTransfer(to, amount);
    }

    function _claimRewards() private {
        gmxRewardRouter.handleRewards({
            _shouldClaimGmx: true,
            _shouldStakeGmx: false,
            _shouldClaimEsGmx: false,
            _shouldStakeEsGmx: false,
            _shouldStakeMultiplierPoints: true,
            _shouldClaimWeth: true,
            _shouldConvertWethToEth: false
        });
    }

    function _buyGlp() private {
        uint256 wethAmount = weth.balanceOf(address(this));
        uint256 _feesPending = feesPending;
        if (wethAmount > _feesPending) {
            wethAmount -= _feesPending;
            uint256 fee = (wethAmount * FEE_BPS) / 10_000;
            feesPending = _feesPending + fee;
            wethAmount -= fee;

            bool success;
            uint256 usdgPrice;
            uint256 glpPrice;
            (success, usdgPrice) = wethUsdgOracle.get(wethUsdgOracleData);
            require(success, "Glp: oracle call failed");
            uint256 amountInUsdg = (wethAmount * usdgPrice) / 1e18;
            amountInUsdg = amountInUsdg - (amountInUsdg * _slippage) / 10_000; //0.5%

            (success, glpPrice) = wethGlpOracle.get(wethGlpOracleData);
            require(success, "Glp: oracle call failed");
            uint256 amountInGlp = (wethAmount * glpPrice) / 1e18;
            amountInGlp = amountInGlp - (amountInGlp * _slippage) / 10_000; //0.5%

            weth.approve(address(glpManager), 0);
            weth.approve(address(glpManager), wethAmount);
            glpRewardRouter.mintAndStakeGlp(
                address(weth),
                wethAmount,
                amountInUsdg,
                amountInGlp
            );
        }
    }

    function _sellGmx(uint256 priceNum, uint256 priceDenom) private {
        uint256 gmxAmount = gmx.balanceOf(address(this));
        if (gmxAmount == 0) {
            return;
        }

        bool zeroForOne = address(gmx) < address(weth);

        (int256 amount0, int256 amount1) = gmxWethPool.swap(
            address(this),
            zeroForOne,
            int256(gmxAmount),
            (zeroForOne ? UNI_MIN_SQRT_RATIO + 1 : UNI_MAX_SQRT_RATIO - 1),
            abi.encode(gmxAmount)
        );
        // TODO: Check the cast?
        uint256 amountOut = uint256(-(zeroForOne ? amount1 : amount0));
        require(amountOut * priceDenom >= gmxAmount * priceNum, "Not enough");
    }
}

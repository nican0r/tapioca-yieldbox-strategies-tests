// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "@boringcrypto/boring-solidity/contracts/BoringOwnable.sol";
import "@boringcrypto/boring-solidity/contracts/interfaces/IERC20.sol";
import "@boringcrypto/boring-solidity/contracts/libraries/BoringERC20.sol";

import "tapioca-sdk/dist/contracts/YieldBox/contracts/strategies/BaseStrategy.sol";

import "../../tapioca-periph/contracts/interfaces/ISwapper.sol";
import "./interfaces/IStkAave.sol";
import "./interfaces/IAaveV3Pool.sol";

contract AaveV3Strategy is BaseERC20Strategy, BoringOwnable, ReentrancyGuard {
    using BoringERC20 for IERC20;

    // ************ //
    // *** VARS *** //
    // ************ //
    IERC20 public immutable wrappedNative;
    ISwapper public swapper;

    IAaveV3Pool public immutable aaveV3Pool;
    IERC20 public immutable receiptToken; //aToken
    IERC20 public immutable rewardToken; //AAVE
    IStkAave public immutable stakedRewardToken; //stkAAVE

    /// @notice Queues tokens up to depositThreshold
    /// @dev When the amount of tokens is greater than the threshold, a deposit operation to AAVE is performed
    uint256 public depositThreshold;

    // ************** //
    // *** EVENTS *** //
    // ************** //
    event DepositThreshold(uint256 _old, uint256 _new);
    event AmountQueued(uint256 amount);
    event AmountDeposited(uint256 amount);
    event AmountWithdrawn(address indexed to, uint256 amount);

    constructor(
        IYieldBox _yieldBox,
        address _token,
        address _aaveV3Pool,
        address _receiptToken,
        address _stakedRewardToken,
        address _multiSwapper
    ) BaseERC20Strategy(_yieldBox, _token) {
        wrappedNative = IERC20(_token);
        swapper = ISwapper(_multiSwapper);

        aaveV3Pool = IAaveV3Pool(_aaveV3Pool);
        receiptToken = IERC20(_receiptToken);
        stakedRewardToken = IStkAave(_stakedRewardToken);
        rewardToken = IERC20(stakedRewardToken.REWARD_TOKEN());
    }

    // ********************** //
    // *** VIEW FUNCTIONS *** //
    // ********************** //
    /// @notice Returns the name of this strategy
    function name() external pure override returns (string memory name_) {
        return "AAVE V3";
    }

    /// @notice Returns the description of this strategy
    function description()
        external
        pure
        override
        returns (string memory description_)
    {
        return "AAVE V3 strategy for wrapped native assets";
    }

    /// @notice returns compounded amounts in wrappedNative
    function compoundAmount() public view returns (uint256 result) {
        uint256 claimable = stakedRewardToken.getTotalRewardsBalance(
            address(this)
        );
        result = 0;
        if (claimable > 0) {
            ISwapper.SwapData memory swapData = swapper.buildSwapData(
                address(rewardToken),
                address(wrappedNative),
                claimable,
                0,
                false,
                false
            );
            result = swapper.getOutputAmount(swapData, "");
            result = result - (result * 50) / 10_000; //0.5%
        }
    }

    // *********************** //
    // *** OWNER FUNCTIONS *** //
    // *********************** //
    /// @notice Sets the deposit threshold
    /// @param amount The new threshold amount
    function setDepositThreshold(uint256 amount) external onlyOwner {
        emit DepositThreshold(depositThreshold, amount);
        depositThreshold = amount;
    }

    // ************************ //
    // *** PUBLIC FUNCTIONS *** //
    // ************************ //
    function compound(bytes memory) public {
        uint256 aaveBalanceBefore = rewardToken.balanceOf(address(this));

        uint256 claimable = stakedRewardToken.getTotalRewardsBalance(
            address(this)
        );
        if (claimable > 0) {
            stakedRewardToken.claimRewards(address(this), claimable);
        }

        //try to cooldown
        (uint40 currentCooldown, ) = stakedRewardToken.stakersCooldowns(
            address(this)
        );
        uint256 balanceOfStkAave = stakedRewardToken.balanceOf(address(this));

        if (currentCooldown > 0) {
            //we have an active cooldown; check if we need to cooldown again
            bool daysPassed = (currentCooldown + 20 days) < block.timestamp;
            if (daysPassed && balanceOfStkAave > 0) {
                stakedRewardToken.cooldown();
            }
        } else if (balanceOfStkAave > 0) {
            stakedRewardToken.cooldown();
        }

        uint256 aaveBalanceAfter = rewardToken.balanceOf(address(this));
        if (aaveBalanceAfter > aaveBalanceBefore) {
            uint256 aaveAmount = aaveBalanceAfter - aaveBalanceBefore;

            //swap AAVE to wrappedNative
            ISwapper.SwapData memory swapData = swapper.buildSwapData(
                address(rewardToken),
                address(wrappedNative),
                aaveAmount,
                0,
                false,
                false
            );
            uint256 calcAmount = swapper.getOutputAmount(swapData, "");
            uint256 minAmount = calcAmount - (calcAmount * 50) / 10_000; //0.5%
            rewardToken.approve(address(swapper), aaveAmount);
            (uint256 amountOut, ) = swapper.swap(
                swapData,
                minAmount,
                address(this),
                ""
            );

            _performDeposit(amountOut);
        }
    }

    /// @notice withdraws everythig from the strategy
    function emergencyWithdraw() external onlyOwner returns (uint256 result) {
        compound("");

        receiptToken.approve(address(aaveV3Pool), 0);
        receiptToken.approve(address(aaveV3Pool), type(uint256).max);
        result = aaveV3Pool.withdraw(
            address(wrappedNative),
            type(uint256).max,
            address(this)
        );
        receiptToken.approve(address(aaveV3Pool), 0);
    }

    // ************************* //
    // *** PRIVATE FUNCTIONS *** //
    // ************************* //
    /// @dev queries 'getUserAccountData' from AAVE and gets the total collateral
    function _currentBalance() internal view override returns (uint256) {
        uint256 deposited = receiptToken.balanceOf(address(this));
        uint256 queued = wrappedNative.balanceOf(address(this));
        uint256 claimableRewards = compoundAmount();
        return deposited + queued + claimableRewards;
    }

    /// @dev deposits to AAVE or queues tokens if the 'depositThreshold' has not been met yet
    ///      - when depositing to AAVE, aToken is minted to this contract
    function _deposited(uint256 amount) internal override nonReentrant {
        _performDeposit(amount);
    }

    function _performDeposit(uint256 amount) private {
        uint256 queued = wrappedNative.balanceOf(address(this));
        if (queued > depositThreshold) {
            wrappedNative.approve(address(aaveV3Pool), queued);
            aaveV3Pool.supply(address(wrappedNative), queued, address(this), 0);
            emit AmountDeposited(queued);
            return;
        }
        emit AmountQueued(amount);
    }

    /// @dev burns aToken in exchange of Token and withdraws from AAVE LendingPool
    function _withdraw(
        address to,
        uint256 amount
    ) internal override nonReentrant {
        uint256 available = _currentBalance();
        require(available >= amount, "AaveV3Strategy: amount not valid");

        uint256 queued = wrappedNative.balanceOf(address(this));
        if (amount > queued) {
            compound("");

            uint256 toWithdraw = amount - queued;

            uint256 balanceBefore = wrappedNative.balanceOf(address(this));
            receiptToken.approve(address(aaveV3Pool), amount);
            aaveV3Pool.withdraw(address(wrappedNative), amount, address(this));
            uint256 balanceAfter = wrappedNative.balanceOf(address(this));

            uint256 obtainedWrapped = balanceAfter - balanceBefore;
            if (obtainedWrapped > toWithdraw) {
                amount += (obtainedWrapped - toWithdraw);
            }
        }

        wrappedNative.safeTransfer(to, amount);
        emit AmountWithdrawn(to, amount);
    }
}
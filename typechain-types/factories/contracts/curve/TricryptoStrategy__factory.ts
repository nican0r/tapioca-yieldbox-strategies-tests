/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TricryptoStrategy,
  TricryptoStrategyInterface,
} from "../../../contracts/curve/TricryptoStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpGauge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpGetter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_multiSwapper",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "DepositThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "LPGetterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "MultiSwapper",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "cheapWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposited",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpGauge",
    outputs: [
      {
        internalType: "contract ITricryptoLPGauge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpGetter",
    outputs: [
      {
        internalType: "contract ITricryptoLPGetter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
    outputs: [
      {
        internalType: "contract ICurveMinter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDepositThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setMultiSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpGetter",
        type: "address",
      },
    ],
    name: "setTricryptoLPGetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapper",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenType",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedNative",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b5060405162002ccd38038062002ccd833981016040819052620000359162000497565b6001600160a01b03808716608052851660a052600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a360016002556001600160a01b0385811660c052600380546001600160a01b03199081168484161790915585821660e08190528483166101005260048054909216928616929092178155604080516376d8b11760e01b815290516376d8b11792828101926020929190829003018186803b1580156200010457600080fd5b505afa15801562000119573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013f91906200052b565b6001600160a01b03908116610120526004805460408051635fcbd28560e01b815290519190931692635fcbd2859281810192602092909190829003018186803b1580156200018c57600080fd5b505afa158015620001a1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c791906200052b565b60405163095ea7b360e01b81526001600160a01b0386811660048301526000196024830152919091169063095ea7b390604401602060405180830381600087803b1580156200021557600080fd5b505af11580156200022a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000250919062000552565b506004805460408051635fcbd28560e01b815290516001600160a01b0390921692635fcbd285928282019260209290829003018186803b1580156200029457600080fd5b505afa158015620002a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002cf91906200052b565b60405163095ea7b360e01b81526001600160a01b0385811660048301526000196024830152919091169063095ea7b390604401602060405180830381600087803b1580156200031d57600080fd5b505af115801562000332573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000358919062000552565b506101205160405163095ea7b360e01b81526001600160a01b03838116600483015260001960248301529091169063095ea7b390604401602060405180830381600087803b158015620003aa57600080fd5b505af1158015620003bf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003e5919062000552565b5060c05160405163095ea7b360e01b81526001600160a01b03858116600483015260001960248301529091169063095ea7b390604401602060405180830381600087803b1580156200043657600080fd5b505af11580156200044b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000471919062000552565b5050505050505062000576565b6001600160a01b03811681146200049457600080fd5b50565b60008060008060008060c08789031215620004b157600080fd5b8651620004be816200047e565b6020880151909650620004d1816200047e565b6040880151909550620004e4816200047e565b6060880151909450620004f7816200047e565b60808801519093506200050a816200047e565b60a08801519092506200051d816200047e565b809150509295509295509295565b6000602082840312156200053e57600080fd5b81516200054b816200047e565b9392505050565b6000602082840312156200056557600080fd5b815180151581146200054b57600080fd5b60805160a05160c05160e051610100516101205161263c62000691600039600081816104150152818161060b015281816107440152818161080501528181610bb00152818161120101526112a701526000818161020b01526106cf01526000818161032501528181610567015281816106a401528181610b0501528181610f3601528181610fd8015281816116d00152818161175c01528181611b720152611c1401526000818161038e0152818161085901528181610a1601528181610c040152818161144701528181611500015281816118790152818161191f01528181611ab601528181611dc101528181611e9e0152611eda015260006103ee01526000818161035401528181610e730152611351015261263c6000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80638da5cb5b116100f9578063e3575f0511610097578063f3fef3a311610071578063f3fef3a3146103c3578063f64920b8146103d6578063f6b4dfb4146103e9578063f7c618c11461041057600080fd5b8063e3575f05146102ce578063eb6d3a1114610389578063ec32e1b9146103b057600080fd5b8063ce845d1d116100d3578063ce845d1d146102ce578063db2e21bc14610347578063de4065771461034f578063e30c39781461037657600080fd5b80638da5cb5b146102fa578063afa91cc61461030d578063c5ec78741461032057600080fd5b806348dcb05111610166578063501883011161014057806350188301146102ce578063726c64f2146102d65780637284e416146102e9578063734daaa1146102f157600080fd5b806348dcb051146102ab5780634cce992d146102b35780634e71e0c8146102c657600080fd5b806317d70f7c116101a257806317d70f7c1461025a57806322a58c5d146102705780632b3297f91461028357806330fa738c1461029657600080fd5b806306fdde03146101c95780630754617214610206578063078dfbe714610245575b600080fd5b60408051808201909152600f81526e43757276652d54726963727970746f60881b60208201525b6040516101fd919061215b565b60405180910390f35b61022d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101fd565b6102586102533660046121b8565b610437565b005b610262600081565b6040519081526020016101fd565b61025861027e366004612248565b61054f565b60035461022d906001600160a01b031681565b61029e600181565b6040516101fd91906122dd565b610262610ae3565b6102586102c1366004612305565b610d11565b610258610d7c565b610262610e39565b60045461022d906001600160a01b031681565b6101f0610e48565b61026260055481565b60005461022d906001600160a01b031681565b61025861031b366004612305565b610e68565b61022d7f000000000000000000000000000000000000000000000000000000000000000081565b610262610edb565b61022d7f000000000000000000000000000000000000000000000000000000000000000081565b60015461022d906001600160a01b031681565b61022d7f000000000000000000000000000000000000000000000000000000000000000081565b6102586103be36600461231e565b611174565b6102586103d1366004612340565b611346565b6102586103e436600461231e565b6113b7565b61022d7f000000000000000000000000000000000000000000000000000000000000000081565b61022d7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b0316331461046a5760405162461bcd60e51b81526004016104619061236a565b60405180910390fd5b811561052d576001600160a01b0383161515806104845750805b6104c85760405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606401610461565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0385166001600160a01b0319909116179055505050565b604051633313458360e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690633313458390602401602060405180830381600087803b1580156105b357600080fd5b505af11580156105c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105eb919061239f565b90508015610adf576040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801561065557600080fd5b505afa158015610669573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068d919061239f565b6040516335313c2160e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301529192507f000000000000000000000000000000000000000000000000000000000000000090911690636a62784290602401600060405180830381600087803b15801561071557600080fd5b505af1158015610729573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691506370a082319060240160206040518083038186803b15801561078f57600080fd5b505afa1580156107a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c7919061239f565b905081811115610adc5760006107dd83836123ce565b60408051600280825260608201835292935060009290916020830190803683370190505090507f000000000000000000000000000000000000000000000000000000000000000081600081518110610837576108376123e5565b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061088b5761088b6123e5565b6001600160a01b03928316602091820292909201015260035460405163d06ca61f60e01b8152600092919091169063d06ca61f906108cf908690869060040161243f565b60006040518083038186803b1580156108e757600080fd5b505afa1580156108fb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109239190810190612460565b600181518110610935576109356123e5565b6020026020010151905060006127108260326109519190612506565b61095b9190612525565b61096590836123ce565b6003546040516338ed173960e01b81529192506001600160a01b0316906338ed1739906109a790879085908890309068056bc75e2d6310000090600401612547565b600060405180830381600087803b1580156109c157600080fd5b505af11580156109d5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109fd9190810190612460565b506040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b158015610a6057600080fd5b505afa158015610a74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a98919061239f565b9050610aa38161157c565b6040518181527fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d39060200160405180910390a150505050505b50505b5050565b604051633313458360e01b815230600482015260009081906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633313458390602401602060405180830381600087803b158015610b4957600080fd5b505af1158015610b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b81919061239f565b6000925090508015610d0d576040805160028082526060820183526000926020830190803683370190505090507f000000000000000000000000000000000000000000000000000000000000000081600081518110610be257610be26123e5565b60200260200101906001600160a01b031690816001600160a01b0316815250507f000000000000000000000000000000000000000000000000000000000000000081600181518110610c3657610c366123e5565b6001600160a01b03928316602091820292909201015260035460405163d06ca61f60e01b815291169063d06ca61f90610c75908590859060040161243f565b60006040518083038186803b158015610c8d57600080fd5b505afa158015610ca1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610cc99190810190612460565b600181518110610cdb57610cdb6123e5565b60200260200101519250612710836032610cf59190612506565b610cff9190612525565b610d0990846123ce565b9250505b5090565b6000546001600160a01b03163314610d3b5760405162461bcd60e51b81526004016104619061236a565b60055460408051918252602082018390527f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc910160405180910390a1600555565b6001546001600160a01b0316338114610dd75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152606401610461565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000610e4361173a565b905090565b60606040518060600160405280603281526020016125d560329139905090565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ecf5760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606401610461565b610ed8816118ff565b50565b600080546001600160a01b03163314610f065760405162461bcd60e51b81526004016104619061236a565b610f1e6040518060200160405280600081525061054f565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b158015610f8057600080fd5b505afa158015610f94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb8919061239f565b604051631c683a1b60e11b815260048101829052600160248201529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906338d0743690604401600060405180830381600087803b15801561102457600080fd5b505af1158015611038573d6000803e3d6000fd5b50506004805460405163af30c87360e01b8152918201859052600093506001600160a01b0316915063af30c8739060240160206040518083038186803b15801561108157600080fd5b505afa158015611095573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b9919061239f565b905060006127106110cb836032612506565b6110d59190612525565b6110df90836123ce565b6004805460405163ca26855760e01b81529293506001600160a01b03169163ca2685579161111a918791869101918252602082015260400190565b602060405180830381600087803b15801561113457600080fd5b505af1158015611148573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116c919061239f565b935050505090565b6000546001600160a01b0316331461119e5760405162461bcd60e51b81526004016104619061236a565b6003546040516001600160a01b038084169216907fe36d79dcda63d47bee388b7dde8bba0b326a1b459889de48dc94dcf3504eda4b90600090a360035460405163095ea7b360e01b81526001600160a01b039182166004820152600060248201527f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b390604401602060405180830381600087803b15801561124757600080fd5b505af115801561125b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127f9190612583565b5060405163095ea7b360e01b81526001600160a01b03828116600483015260001960248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390604401602060405180830381600087803b1580156112eb57600080fd5b505af11580156112ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113239190612583565b50600380546001600160a01b0319166001600160a01b0392909216919091179055565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146113ad5760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606401610461565b610adf8282611a2e565b6000546001600160a01b031633146113e15760405162461bcd60e51b81526004016104619061236a565b6004546040516001600160a01b038084169216907fec75cca752304221051372b35f3488d6d59ae4be7bbbb04869f1e887318e129990600090a36004805460405163095ea7b360e01b81526001600160a01b0391821692810192909252600060248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390604401602060405180830381600087803b15801561148b57600080fd5b505af115801561149f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c39190612583565b50600480546001600160a01b0319166001600160a01b03838116918217835560405163095ea7b360e01b81529283019190915260001960248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390604401602060405180830381600087803b15801561154457600080fd5b505af1158015611558573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adf9190612583565b600480546040516305c43acd60e01b81529182018390526000916001600160a01b03909116906305c43acd9060240160206040518083038186803b1580156115c357600080fd5b505afa1580156115d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115fb919061239f565b9050600061271061160d836032612506565b6116179190612525565b61162190836123ce565b6004805460405163b529fe1d60e01b8152918201869052602482018390529192506000916001600160a01b03169063b529fe1d90604401602060405180830381600087803b15801561167257600080fd5b505af1158015611686573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116aa919061239f565b6040516383df674760e01b815260048101829052306024820152600060448201529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906383df674790606401600060405180830381600087803b15801561171c57600080fd5b505af1158015611730573d6000803e3d6000fd5b5050505050505050565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b15801561179e57600080fd5b505afa1580156117b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117d6919061239f565b6004805460405163af30c87360e01b81529182018390529192506000916001600160a01b03169063af30c8739060240160206040518083038186803b15801561181e57600080fd5b505afa158015611832573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611856919061239f565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b1580156118bb57600080fd5b505afa1580156118cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118f3919061239f565b905061116c81836125a0565b611907611fbc565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801561196957600080fd5b505afa15801561197d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a1919061239f565b90506005548111156119ef576119b68161157c565b6040518181527fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d39060200160405180910390a150611a24565b6040518281527f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca9060200160405180910390a1505b610ed86001600255565b611a36611fbc565b6000611a4061173a565b905081811015611a9e5760405162461bcd60e51b815260206004820152602360248201527f54726963727970746f53747261746567793a20616d6f756e74206e6f742076616044820152621b1a5960ea1b6064820152608401610461565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b158015611b0057600080fd5b505afa158015611b14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b38919061239f565b905080831115611daa57611b5a6040518060200160405280600081525061054f565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b158015611bbc57600080fd5b505afa158015611bd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bf4919061239f565b604051631c683a1b60e11b815260048101829052600160248201529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906338d0743690604401600060405180830381600087803b158015611c6057600080fd5b505af1158015611c74573d6000803e3d6000fd5b50506004805460405163af30c87360e01b8152918201859052600093506001600160a01b0316915063af30c8739060240160206040518083038186803b158015611cbd57600080fd5b505afa158015611cd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cf5919061239f565b90506000612710611d07836032612506565b611d119190612525565b611d1b90836123ce565b6004805460405163ca26855760e01b8152918201869052602482018390529192506000916001600160a01b03169063ca26855790604401602060405180830381600087803b158015611d6c57600080fd5b505af1158015611d80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611da4919061239f565b50505050505b6040516370a0823160e01b815230600482015283907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b158015611e0b57600080fd5b505afa158015611e1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e43919061239f565b1015611e915760405162461bcd60e51b815260206004820152601d60248201527f54726963727970746f53747261746567793a206e6f7420656e6f7567680000006044820152606401610461565b611ec56001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168585612014565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b158015611f2457600080fd5b505afa158015611f38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f5c919061239f565b90508015611f6d57611f6d8161157c565b836001600160a01b03167f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d884604051611fa891815260200190565b60405180910390a25050610adf6001600255565b60028054141561200e5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610461565b60028055565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161207091906125b8565b6000604051808303816000865af19150503d80600081146120ad576040519150601f19603f3d011682016040523d82523d6000602084013e6120b2565b606091505b50915091508180156120dc5750805115806120dc5750808060200190518101906120dc9190612583565b6121285760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152606401610461565b5050505050565b60005b8381101561214a578181015183820152602001612132565b83811115610adc5750506000910152565b602081526000825180602084015261217a81604085016020870161212f565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146121a557600080fd5b919050565b8015158114610ed857600080fd5b6000806000606084860312156121cd57600080fd5b6121d68461218e565b925060208401356121e6816121aa565b915060408401356121f6816121aa565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561224057612240612201565b604052919050565b6000602080838503121561225b57600080fd5b823567ffffffffffffffff8082111561227357600080fd5b818501915085601f83011261228757600080fd5b81358181111561229957612299612201565b6122ab601f8201601f19168501612217565b915080825286848285010111156122c157600080fd5b8084840185840137600090820190930192909252509392505050565b60208101600583106122ff57634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561231757600080fd5b5035919050565b60006020828403121561233057600080fd5b6123398261218e565b9392505050565b6000806040838503121561235357600080fd5b61235c8361218e565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000602082840312156123b157600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156123e0576123e06123b8565b500390565b634e487b7160e01b600052603260045260246000fd5b600081518084526020808501945080840160005b838110156124345781516001600160a01b03168752958201959082019060010161240f565b509495945050505050565b82815260406020820152600061245860408301846123fb565b949350505050565b6000602080838503121561247357600080fd5b825167ffffffffffffffff8082111561248b57600080fd5b818501915085601f83011261249f57600080fd5b8151818111156124b1576124b1612201565b8060051b91506124c2848301612217565b81815291830184019184810190888411156124dc57600080fd5b938501935b838510156124fa578451825293850193908501906124e1565b98975050505050505050565b6000816000190483118215151615612520576125206123b8565b500290565b60008261254257634e487b7160e01b600052601260045260246000fd5b500490565b85815284602082015260a06040820152600061256660a08301866123fb565b6001600160a01b0394909416606083015250608001529392505050565b60006020828403121561259557600080fd5b8151612339816121aa565b600082198211156125b3576125b36123b8565b500190565b600082516125ca81846020870161212f565b919091019291505056fe43757276652d54726963727970746f20737472617465677920666f722077726170706564206e617469766520617373657473a2646970667358221220acfb3cf4bb50b1d3e750b6b1311f2a6b899e39113d5850cab7a04b38fc80763564736f6c63430008090033";

type TricryptoStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TricryptoStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TricryptoStrategy__factory extends ContractFactory {
  constructor(...args: TricryptoStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lpGauge: PromiseOrValue<string>,
    _lpGetter: PromiseOrValue<string>,
    _minter: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TricryptoStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _lpGauge,
      _lpGetter,
      _minter,
      _multiSwapper,
      overrides || {}
    ) as Promise<TricryptoStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lpGauge: PromiseOrValue<string>,
    _lpGetter: PromiseOrValue<string>,
    _minter: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _lpGauge,
      _lpGetter,
      _minter,
      _multiSwapper,
      overrides || {}
    );
  }
  override attach(address: string): TricryptoStrategy {
    return super.attach(address) as TricryptoStrategy;
  }
  override connect(signer: Signer): TricryptoStrategy__factory {
    return super.connect(signer) as TricryptoStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TricryptoStrategyInterface {
    return new utils.Interface(_abi) as TricryptoStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TricryptoStrategy {
    return new Contract(address, _abi, signerOrProvider) as TricryptoStrategy;
  }
}

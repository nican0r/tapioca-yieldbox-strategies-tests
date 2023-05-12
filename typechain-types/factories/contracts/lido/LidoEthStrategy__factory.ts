/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LidoEthStrategy,
  LidoEthStrategyInterface,
} from "../../../contracts/lido/LidoEthStrategy";

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
        name: "_stEth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_curvePool",
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
    stateMutability: "pure",
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
    name: "curveStEthPool",
    outputs: [
      {
        internalType: "contract ICurveEthStEthPool",
        name: "",
        type: "address",
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
    inputs: [],
    name: "stEth",
    outputs: [
      {
        internalType: "contract IStEth",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6101008060405234620001c2576080816200155c8038038091620000248285620001c7565b833981010312620001c2578051906001600160a01b038083168303620001c25760209060446200005683850162000201565b6200007260606200006a6040880162000201565b960162000201565b956080528060a05260018060a01b0319600096879133818454161783558580604051998a98899733887f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360016002551660c05216928360e052168091600354161760035563095ea7b360e01b8452600484015260001960248401525af18015620001b75762000172575b60405161134590816200021782396080518181816101a70152818161061f0152610896015260a05181610142015260c0518181816101e7015281816105ad0152818161077f01528181610ef2015261104b015260e0518181816106db015281816108ef01528181610e6101526110e60152f35b6020813d8211620001ae575b816200018d60209383620001c7565b81010312620001aa575180151503620001a75780620000ff565b80fd5b5080fd5b3d91506200017e565b6040513d84823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b03821190821017620001eb57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620001c25756fe6080604081815260049182361015610022575b505050361561002057600080fd5b005b600092833560e01c91826306fdde0314610cb757508163078dfbe714610b9857816317d70f7c14610b0757816322a58c5d14610b3e57816330fa738c14610b2257816348dcb05114610b075781634cce992d14610aaa5781634e71e0c8146109f757816350188301146105dc5781637284e41614610964578163734daaa1146109465781638da5cb5b1461091e57816399940ece146108da578163afa91cc614610879578163ce845d1d146105dc578163db2e21bc14610677578163dc1ce8761461064e578163de4065771461060a578163e30c3978146105e1578163e3575f05146105dc578163eb6d3a1114610598578163f3fef3a314610175575063f6b4dfb41461012f5780610012565b34610171578160031936011261017157517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b90503461059457816003193601126105945761018f610d4c565b6001600160a01b03929091602480359291906101ce337f0000000000000000000000000000000000000000000000000000000000000000881614610fee565b6101d66112ae565b836101df610e38565b1061055357857f0000000000000000000000000000000000000000000000000000000000000000168351956370a0823160e01b808852308589015260209788818681875afa9081156104d6578b91610526575b5080881161041a575b508551908152308582015287818581865afa908115610410579087918b916103da575b5010610398578451978789019163a9059cbb60e01b835216978884820152866044820152604481526080810181811067ffffffffffffffff82111761038457865251899283929083905af13d1561037d573d6102b981610dae565b906102c686519283610d8c565b81523d898883013e5b8161034d575b501561030d575050519081527f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d89190a2600160025580f35b601c9085606494519362461bcd60e51b85528401528201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152fd5b80518015925087908315610365575b505050386102d5565b6103759350820181019101611029565b38868161035c565b60606102cf565b84604187634e487b7160e01b600052526000fd5b845162461bcd60e51b81528085018890526018818501527f4c69646f53747261746567793a206e6f7420656e6f75676800000000000000006044820152606490fd5b809250898092503d8311610409575b6103f38183610d8c565b81010312610404578690513861025e565b600080fd5b503d6103e9565b86513d8c823e3d90fd5b6104249088611302565b60fa810281810460fa148215171561051457610487918c61044a6127108d940483611302565b918d60035416918a8c5196879586948593630f7c084960e21b85528401606090939291936080810194600182526000602083015260408201520152565b03925af19081156104d6578b916104e3575b508a843b156104e0578751630d0e30db60e41b815291829088908290885af180156104d6571561023b576104cf909a919a610d62565b983861023b565b87513d8d823e3d90fd5b80fd5b90508881813d831161050d575b6104fa8183610d8c565b81010312610509575138610499565b8a80fd5b503d6104f0565b634e487b7160e01b8c5260118752858cfd5b90508881813d831161054c575b61053d8183610d8c565b81010312610509575138610232565b503d610533565b601e906020606494519362461bcd60e51b85528401528201527f4c69646f53747261746567793a20616d6f756e74206e6f742076616c696400006044820152fd5b8280fd5b505034610171578160031936011261017157517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b610dca565b50503461017157816003193601126101715760015490516001600160a01b039091168152602090f35b505034610171578160031936011261017157517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50503461017157816003193601126101715760035490516001600160a01b039091168152602090f35b83833461017157816003193601126101715781546001600160a01b0392906106a29084163314610ded565b81519260209384810181811067ffffffffffffffff82111761086657845282905282516370a0823160e01b8152308682015284816024817f000000000000000000000000000000000000000000000000000000000000000086165afa90811561081c578391610839575b5060328102818104603214821517156108265794829161076a9661271086849a96600354169289519a8b9586948593630f7c084960e21b855204908a8401606090939291936080810194600182526000602083015260408201520152565b03925af194851561081c5783956107ed575b507f00000000000000000000000000000000000000000000000000000000000000001690813b15610594578351630d0e30db60e41b8152929182918491829088905af19081156107e257506107d3575b5051908152f35b6107dc90610d62565b836107cc565b8351903d90823e3d90fd5b9094508581813d8311610815575b6108058183610d8c565b810103126105945751938661077c565b503d6107fb565b84513d85823e3d90fd5b634e487b7160e01b845260118752602484fd5b90508481813d831161085f575b6108508183610d8c565b8101031261059457518661070c565b503d610846565b634e487b7160e01b845260418752602484fd5b839034610171576020366003190112610171576108d2906108c4337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614610fee565b6108cc6112ae565b35611041565b600160025580f35b505034610171578160031936011261017157517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b505034610171578160031936011261017157905490516001600160a01b039091168152602090f35b90503461059457826003193601126105945760209250549051908152f35b838334610171578160031936011261017157805191606083019083821067ffffffffffffffff8311176109e457506109e093508152602b82527f4c69646f2d45544820737472617465677920666f722077726170706564206e6160208301526a746976652061737365747360a81b818301525191829182610d03565b0390f35b634e487b7160e01b815260418552602490fd5b919050346105945782600319360112610594576001546001600160a01b03929091838316919033839003610a675750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b905034610594576020366003190112610594577f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc813592610af560018060a01b038654163314610ded565b82548151908152846020820152a15580f35b50503461017157816003193601126101715751908152602090f35b5050346101715781600319360112610171576020905160018152f35b9050346105945760203660031901126105945780359167ffffffffffffffff8311610b945736602384011215610b9457610b8883602493013591610b8183610dae565b9051610d8c565b36920101116104e05780f35b8380fd5b9190503461059457606036600319011261059457610bb4610d4c565b91602435918215158303610cb357604435928315158403610caf5760018060a01b03948591610be7838954163314610ded565b15610c8e571692831590811591610c86575b5015610c4b5750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36bffffffffffffffffffffffff60a01b8092161782556001541660015580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b905038610bf9565b9350505050166bffffffffffffffffffffffff60a01b600154161760015580f35b8580fd5b8480fd5b8385346104e057806003193601126104e0578183019083821067ffffffffffffffff8311176109e457506109e0935081526008825267098d2c8de5a8aa8960c31b602083015251918291825b6020808252825181830181905290939260005b828110610d3857505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610d16565b600435906001600160a01b038216820361040457565b67ffffffffffffffff8111610d7657604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610d7657604052565b67ffffffffffffffff8111610d7657601f01601f191660200190565b34610404576000366003190112610404576020610de5610e38565b604051908152f35b15610df457565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b604080516370a0823160e01b808252306004830152916001600160a01b039160209081816024817f000000000000000000000000000000000000000000000000000000000000000088165afa908115610fad57600091610fc1575b508160008215610fb857508460035416916064855180948193635e0d443f60e01b8352600160048401526000602484015260448301525afa908115610fad57908291600091610f7f575b50945b602484518096819382523060048301527f0000000000000000000000000000000000000000000000000000000000000000165afa918215610f755750600091610f49575b5090508101809111610f335790565b634e487b7160e01b600052601160045260246000fd5b82813d8311610f6e575b610f5d8183610d8c565b810103126104e05750518038610f24565b503d610f53565b513d6000823e3d90fd5b9182813d8311610fa6575b610f948183610d8c565b810103126104e0575081905138610edd565b503d610f8a565b83513d6000823e3d90fd5b90915094610ee0565b908282813d8311610fe7575b610fd78183610d8c565b810103126104e057505138610e93565b503d610fcd565b15610ff557565b60405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606490fd5b90816020910312610404575180151581036104045790565b60018060a01b03807f000000000000000000000000000000000000000000000000000000000000000016916040928351906370a0823160e01b82526000600430818501526020958685602481875afa9485156112a4578395611275575b50815485116110d55750505050507f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca9251908152a1565b8751631ea7ca8960e01b81529495507f000000000000000000000000000000000000000000000000000000000000000016939192909186818481885afa90811561126b57849161123e575b506111fb57803b15610594578280916024895180948193632e1a7d4d60e01b83528a888401525af180156111f157908692916111df575b5060248391868951968794859363a1903eab60e01b85528401525af19081156111d457506111aa575b507fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d39251908152a1565b8290813d83116111cd575b6111bf8183610d8c565b810103126104045738611180565b503d6111b5565b8551903d90823e3d90fd5b926111eb602494610d62565b92611157565b87513d85823e3d90fd5b865162461bcd60e51b8152808301879052601c60248201527f4c69646f53747261746567793a207374616b696e6720706175736564000000006044820152606490fd5b61125e9150873d8911611264575b6112568183610d8c565b810190611029565b38611120565b503d61124c565b88513d86823e3d90fd5b9094508681813d831161129d575b61128d8183610d8c565b810103126105945751933861109e565b503d611283565b88513d85823e3d90fd5b60028054146112bd5760028055565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b91908203918211610f335756fea26469706673582212207708039e27fdc860f5c194f35bd37fc0fd5f01bb509d8dadadc5b8cd42261d8764736f6c63430008120033";

type LidoEthStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LidoEthStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LidoEthStrategy__factory extends ContractFactory {
  constructor(...args: LidoEthStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _stEth: PromiseOrValue<string>,
    _curvePool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LidoEthStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _stEth,
      _curvePool,
      overrides || {}
    ) as Promise<LidoEthStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _stEth: PromiseOrValue<string>,
    _curvePool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _stEth,
      _curvePool,
      overrides || {}
    );
  }
  override attach(address: string): LidoEthStrategy {
    return super.attach(address) as LidoEthStrategy;
  }
  override connect(signer: Signer): LidoEthStrategy__factory {
    return super.connect(signer) as LidoEthStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LidoEthStrategyInterface {
    return new utils.Interface(_abi) as LidoEthStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LidoEthStrategy {
    return new Contract(address, _abi, signerOrProvider) as LidoEthStrategy;
  }
}

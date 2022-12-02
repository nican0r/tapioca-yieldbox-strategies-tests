/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  StargateSwapperV3,
  StargateSwapperV3Interface,
} from "../../../contracts/stargate/StargateSwapperV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISwapRouter",
        name: "_swapRouter",
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
    name: "PoolFee",
    type: "event",
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
    name: "poolFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "queryAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "_newFee",
        type: "uint24",
      },
    ],
    name: "setPoolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
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
  "0x60a06040526000805462ffffff60a01b191661017760a31b17905534801561002657600080fd5b506040516111f93803806111f98339810160408190526100459161006e565b60601b6001600160601b03191660805260008054336001600160a01b031990911617905561009c565b60006020828403121561007f578081fd5b81516001600160a01b0381168114610095578182fd5b9392505050565b60805160601c6111366100c3600039806101fd5280610286528061035252506111366000f3fe6080604052600436106100595760003560e01c8063089fe6aa1461006557806373dd250c146100905780638bce137e146100b25780638da5cb5b146100df578063a62d372514610101578063c31c9c071461012157610060565b3661006057005b600080fd5b34801561007157600080fd5b5061007a610136565b60405161008791906110d1565b60405180910390f35b34801561009c57600080fd5b506100b06100ab366004610ef3565b610148565b005b3480156100be57600080fd5b506100d26100cd366004610fa5565b6101e9565b60405161008791906110f7565b3480156100eb57600080fd5b506100f4610319565b604051610087919061101d565b34801561010d57600080fd5b506100d261011c366004610f2e565b610328565b34801561012d57600080fd5b506100f4610350565b600054600160a01b900462ffffff1681565b6000546001600160a01b0316331461017b5760405162461bcd60e51b815260040161017290611031565b60405180910390fd5b7f2bff118b9b9e3deb4fc5204e6ba828351c954685d0b119d0e21add79f8783399600060149054906101000a900462ffffff16826040516101bd9291906110e1565b60405180910390a16000805462ffffff909216600160a01b0262ffffff60a01b19909216919091179055565b60006101f78633308a610374565b610222867f0000000000000000000000000000000000000000000000000000000000000000896104cc565b60408051610100810182526001600160a01b038881168252878116602083015260008054600160a01b900462ffffff16838501523360608401526080830188905260a083018b905260c0830187905260e0830152915163414bf38960e01b815290917f0000000000000000000000000000000000000000000000000000000000000000169063414bf389906102bb908490600401611068565b602060405180830381600087803b1580156102d557600080fd5b505af11580156102e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030d9190610f16565b98975050505050505050565b6000546001600160a01b031681565b60008061033684603c61061a565b50905061034581888888610989565b979650505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b178152925182516000948594938a169392918291908083835b602083106103f85780518252601f1990920191602091820191016103d9565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461045a576040519150601f19603f3d011682016040523d82523d6000602084013e61045f565b606091505b509150915081801561048d57508051158061048d575080806020019051602081101561048a57600080fd5b50515b6104c4576040805162461bcd60e51b815260206004820152600360248201526229aa2360e91b604482015290519081900360640190fd5b505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b1781529251825160009485949389169392918291908083835b602083106105485780518252601f199092019160209182019101610529565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146105aa576040519150601f19603f3d011682016040523d82523d6000602084013e6105af565b606091505b50915091508180156105dd5750805115806105dd57508080602001905160208110156105da57600080fd5b50515b610613576040805162461bcd60e51b8152602060048201526002602482015261534160f01b604482015290519081900360640190fd5b5050505050565b60008063ffffffff831661065a576040805162461bcd60e51b8152602060048201526002602482015261042560f41b604482015290519081900360640190fd5b604080516002808252606082018352600092602083019080368337019050509050838160008151811061068957fe5b602002602001019063ffffffff16908163ffffffff16815250506000816001815181106106b257fe5b63ffffffff90921660209283029190910182015260405163883bdbfd60e01b81526004810182815283516024830152835160009384936001600160a01b038b169363883bdbfd9388939192839260449091019185820191028083838b5b8381101561072757818101518382015260200161070f565b505050509050019250505060006040518083038186803b15801561074a57600080fd5b505afa15801561075e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604090815281101561078757600080fd5b81019080805160405193929190846401000000008211156107a757600080fd5b9083019060208201858111156107bc57600080fd5b82518660208202830111640100000000821117156107d957600080fd5b82525081516020918201928201910280838360005b838110156108065781810151838201526020016107ee565b505050509050016040526020018051604051939291908464010000000082111561082f57600080fd5b90830190602082018581111561084457600080fd5b825186602082028301116401000000008211171561086157600080fd5b82525081516020918201928201910280838360005b8381101561088e578181015183820152602001610876565b50505050905001604052505050915091506000826000815181106108ae57fe5b6020026020010151836001815181106108c357fe5b60200260200101510390506000826000815181106108dd57fe5b6020026020010151836001815181106108f257fe5b60200260200101510390508763ffffffff168260060b8161090f57fe5b05965060008260060b12801561093957508763ffffffff168260060b8161093257fe5b0760060b15155b1561094657600019909601955b63ffffffff88166001600160a01b0302640100000000600160c01b03602083901b166001600160c01b0382168161097957fe5b0496505050505050509250929050565b60008061099586610a80565b90506001600160801b036001600160a01b03821611610a04576001600160a01b03808216800290848116908616106109e4576109df600160c01b876001600160801b031683610db2565b6109fc565b6109fc81876001600160801b0316600160c01b610db2565b925050610a77565b6000610a236001600160a01b0383168068010000000000000000610db2565b9050836001600160a01b0316856001600160a01b031610610a5b57610a56600160801b876001600160801b031683610db2565b610a73565b610a7381876001600160801b0316600160801b610db2565b9250505b50949350505050565b60008060008360020b12610a97578260020b610a9f565b8260020b6000035b9050620d89e8811115610add576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b600060018216610af157600160801b610b03565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615610b37576ffff97272373d413259a46990580e213a0260801c5b6004821615610b56576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615610b75576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615610b94576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615610bb3576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615610bd2576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615610bf1576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615610c11576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615610c31576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615610c51576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615610c71576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615610c91576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615610cb1576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615610cd1576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615610cf1576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615610d12576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615610d32576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615610d51576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615610d6e576b048a170391f7dc42444e8fa20260801c5b60008460020b1315610d89578060001981610d8557fe5b0490505b640100000000810615610d9d576001610da0565b60005b60ff16602082901c0192505050919050565b6000808060001985870986860292508281109083900303905080610de85760008411610ddd57600080fd5b508290049050610e5b565b808411610df457600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b80356001600160a01b0381168114610e7957600080fd5b919050565b600082601f830112610e8e578081fd5b813567ffffffffffffffff80821115610ea357fe5b604051601f8301601f191681016020018281118282101715610ec157fe5b604052828152848301602001861015610ed8578384fd5b82602086016020830137918201602001929092529392505050565b600060208284031215610f04578081fd5b813562ffffff81168114610e5b578182fd5b600060208284031215610f27578081fd5b5051919050565b600080600080600060a08688031215610f45578081fd5b85359450610f5560208701610e62565b9350610f6360408701610e62565b9250610f7160608701610e62565b9150608086013567ffffffffffffffff811115610f8c578182fd5b610f9888828901610e7e565b9150509295509295909350565b60008060008060008060c08789031215610fbd578081fd5b86359550610fcd60208801610e62565b9450610fdb60408801610e62565b9350606087013592506080870135915060a087013567ffffffffffffffff811115611004578182fd5b61101089828a01610e7e565b9150509295509295509295565b6001600160a01b0391909116815260200190565b6020808252601f908201527f53746172676174655377617070657256333a20756e617574686f72697a656400604082015260600190565b81516001600160a01b03908116825260208084015182169083015260408084015162ffffff16908301526060808401518216908301526080808401519083015260a0838101519083015260c0808401519083015260e09283015116918101919091526101000190565b62ffffff91909116815260200190565b62ffffff92831681529116602082015260400190565b9081526020019056fea2646970667358221220c0db52db18a0692e76684dbf529bbb396014148f46037257bed23d6916be197264736f6c63430007060033";

type StargateSwapperV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StargateSwapperV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StargateSwapperV3__factory extends ContractFactory {
  constructor(...args: StargateSwapperV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _swapRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StargateSwapperV3> {
    return super.deploy(
      _swapRouter,
      overrides || {}
    ) as Promise<StargateSwapperV3>;
  }
  override getDeployTransaction(
    _swapRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_swapRouter, overrides || {});
  }
  override attach(address: string): StargateSwapperV3 {
    return super.attach(address) as StargateSwapperV3;
  }
  override connect(signer: Signer): StargateSwapperV3__factory {
    return super.connect(signer) as StargateSwapperV3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StargateSwapperV3Interface {
    return new utils.Interface(_abi) as StargateSwapperV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StargateSwapperV3 {
    return new Contract(address, _abi, signerOrProvider) as StargateSwapperV3;
  }
}

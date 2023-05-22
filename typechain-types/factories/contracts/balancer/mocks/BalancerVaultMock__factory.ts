/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BalancerVaultMock,
  BalancerVaultMockInterface,
} from "../../../../contracts/balancer/mocks/BalancerVaultMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_stablePool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "assets",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "minAmountsOut",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "userData",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool",
          },
        ],
        internalType: "struct IBalancerVault.ExitPoolRequest",
        name: "request",
        type: "tuple",
      },
    ],
    name: "exitPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "getPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "enum IBalancerVault.PoolSpecialization",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "getPoolTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "assets",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "maxAmountsIn",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "userData",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool",
          },
        ],
        internalType: "struct IBalancerVault.JoinPoolRequest",
        name: "request",
        type: "tuple",
      },
    ],
    name: "joinPool",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "stablePool",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60803461008a57601f61090038819003918201601f19168301916001600160401b0383118484101761008f57808492604094855283398101031261008a5780516001600160a01b03918282169182900361008a576020015191821680920361008a5760018060a01b031990816000541617600055600154161760015560405161085a90816100a68239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040818152600436101561001f575b5050361561001d57600080fd5b005b600091823560e01c9081633fc8cef314610324575080638bdb3913146102a357806395ef4fa51461027c578063b95cac2814610170578063f6c00927146101465763f94d4668036100105734610142576020918260031936011261013f578282519161008a83610364565b6002835281830193803686376001805490956001600160a01b03949185166100b187610564565b5282516100bd81610364565b600281528281019584368837845197606089019060608a525180915260808901939187905b8b83831061012757505050508783038885015250518082529082019491845b8281106101145787808888888301520390f35b8351875295810195928101928801610101565b845182168752958701959387019391909101906100e2565b80fd5b5080fd5b50903461013f57602036600319011261013f5760018060a01b038154169082519182526020820152f35b50608036600319011261014257610185610349565b6001600160a01b039160443590849084831683036101425767ffffffffffffffff606435818111610278576101c16101e79136906004016103ec565b956020886101cf8951610564565b51169701966101de8851610564565b519130916105dc565b858354166101f58651610564565b5190803b15610274576024859285519687938492637c928fe960e01b845260048401525af1801561026a57610243575b505050610239610240938554169251610564565b519161058a565b80f35b8211610256575261023961024038610225565b634e487b7160e01b86526041600452602486fd5b82513d89823e3d90fd5b8480fd5b8380fd5b5034610142578160031936011261014257905490516001600160a01b039091168152602090f35b823461013f57608036600319011261013f576102bd610349565b6001600160a01b0390604435828116908190036102785760643567ffffffffffffffff8111610274576102409361031b6102fe6102399336906004016103ec565b610315838954169660208301976101de8951610564565b51610564565b51169251610564565b8390346101425781600319360112610142576001546001600160a01b03168152602090f35b602435906001600160a01b038216820361035f57565b600080fd5b6060810190811067ffffffffffffffff82111761038057604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761038057604052565b67ffffffffffffffff81116103805760051b60200190565b67ffffffffffffffff811161038057601f01601f191660200190565b91909160808184031261035f57604092835191608083019167ffffffffffffffff92848110848211176103805786528395823584811161035f5783019382601f8601121561035f57843594610440866103b8565b9061044d84519283610396565b868252602096878084019160051b8301019186831161035f578801905b8282106105455750505086528484013581811161035f57840183601f8201121561035f5780359061049a826103b8565b916104a785519384610396565b808352878084019160051b8301019186831161035f5788809101915b83831061053557509150508701528184013590811161035f57830182601f8201121561035f578035946104f5866103d0565b9361050284519586610396565b86855281878401011161035f578560609682600094018387013784010152840152013590811515820361035f5760600152565b82358152918101918991016104c3565b81356001600160a01b038116810361035f57815290880190880161046a565b8051600110156105745760400190565b634e487b7160e01b600052603260045260246000fd5b60405163a9059cbb60e01b60208201526001600160a01b039092166024830152604480830193909352918152608081019167ffffffffffffffff831182841017610380576105da92604052610631565b565b6040516323b872dd60e01b60208201526001600160a01b03928316602482015292909116604483015260648083019390935291815260a081019181831067ffffffffffffffff841117610380576105da926040525b60018060a01b031690604051604081019080821067ffffffffffffffff831117610380576106c1916040526020938482527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564858301526000808587829751910182855af13d1561074c573d916106a6836103d0565b926106b46040519485610396565b83523d868885013e610750565b8051806106cf575b50505050565b81849181010312610142578201519081159182150361013f57506106f5578080806106c9565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b6060915b919290156107b25750815115610764575090565b3b1561076d5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156107c55750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b82851061080b575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506107e856fea264697066735822122095f2d92e5cb70ca520e167b3f62abed5e400748099266a23089fe4749ba9204f64736f6c63430008120033";

type BalancerVaultMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerVaultMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancerVaultMock__factory extends ContractFactory {
  constructor(...args: BalancerVaultMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _stablePool: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BalancerVaultMock> {
    return super.deploy(
      _stablePool,
      _weth,
      overrides || {}
    ) as Promise<BalancerVaultMock>;
  }
  override getDeployTransaction(
    _stablePool: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_stablePool, _weth, overrides || {});
  }
  override attach(address: string): BalancerVaultMock {
    return super.attach(address) as BalancerVaultMock;
  }
  override connect(signer: Signer): BalancerVaultMock__factory {
    return super.connect(signer) as BalancerVaultMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerVaultMockInterface {
    return new utils.Interface(_abi) as BalancerVaultMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerVaultMock {
    return new Contract(address, _abi, signerOrProvider) as BalancerVaultMock;
  }
}
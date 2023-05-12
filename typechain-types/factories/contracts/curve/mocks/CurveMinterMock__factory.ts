/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  CurveMinterMock,
  CurveMinterMockInterface,
} from "../../../../contracts/curve/mocks/CurveMinterMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract ERC20Mock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60803461007457601f61027838819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600080546001600160a01b0319169190911790556040516101e890816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c9182636a6278421461006557505063fc0c546a1461003b57600080fd5b34610061578160031936011261006157905490516001600160a01b039091168152602090f35b5080fd5b838591346101ae5760203660031901126101ae576001600160a01b038435818116036101aa578084541691823b156101a657637c928fe960e01b8152848160248183678ac7230489e8000097888c8401525af1801561019c5761016d575b508394916044602092865416918551968793849263a9059cbb60e01b8452338885015260248401525af18015610163576100fb578380f35b6020913d831161015b575b601f8301601f191684019167ffffffffffffffff831185841017610146575052602090820182900312610061575180151503610143578180808380f35b80fd5b604190634e487b7160e01b6000525260246000fd5b3d9250610106565b82513d86823e3d90fd5b67ffffffffffffffff81959295116101895783529260446100c3565b634e487b7160e01b825260418652602482fd5b84513d87823e3d90fd5b8480fd5b8380fd5b8280fdfea2646970667358221220f8e32683a5b4e06535b5f3f26979c8ff3abeec7c02abf6d2c11ff20cb5a277fe64736f6c63430008120033";

type CurveMinterMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveMinterMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveMinterMock__factory extends ContractFactory {
  constructor(...args: CurveMinterMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurveMinterMock> {
    return super.deploy(_token, overrides || {}) as Promise<CurveMinterMock>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override attach(address: string): CurveMinterMock {
    return super.attach(address) as CurveMinterMock;
  }
  override connect(signer: Signer): CurveMinterMock__factory {
    return super.connect(signer) as CurveMinterMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveMinterMockInterface {
    return new utils.Interface(_abi) as CurveMinterMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveMinterMock {
    return new Contract(address, _abi, signerOrProvider) as CurveMinterMock;
  }
}

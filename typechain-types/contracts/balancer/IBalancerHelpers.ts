/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IBalancerVault {
  export type ExitPoolRequestStruct = {
    assets: PromiseOrValue<string>[];
    minAmountsOut: PromiseOrValue<BigNumberish>[];
    userData: PromiseOrValue<BytesLike>;
    toInternalBalance: PromiseOrValue<boolean>;
  };

  export type ExitPoolRequestStructOutput = [
    string[],
    BigNumber[],
    string,
    boolean
  ] & {
    assets: string[];
    minAmountsOut: BigNumber[];
    userData: string;
    toInternalBalance: boolean;
  };

  export type JoinPoolRequestStruct = {
    assets: PromiseOrValue<string>[];
    maxAmountsIn: PromiseOrValue<BigNumberish>[];
    userData: PromiseOrValue<BytesLike>;
    fromInternalBalance: PromiseOrValue<boolean>;
  };

  export type JoinPoolRequestStructOutput = [
    string[],
    BigNumber[],
    string,
    boolean
  ] & {
    assets: string[];
    maxAmountsIn: BigNumber[];
    userData: string;
    fromInternalBalance: boolean;
  };
}

export interface IBalancerHelpersInterface extends utils.Interface {
  functions: {
    "queryExit(bytes32,address,address,(address[],uint256[],bytes,bool))": FunctionFragment;
    "queryJoin(bytes32,address,address,(address[],uint256[],bytes,bool))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "queryExit" | "queryJoin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "queryExit",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      IBalancerVault.ExitPoolRequestStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "queryJoin",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      IBalancerVault.JoinPoolRequestStruct
    ]
  ): string;

  decodeFunctionResult(functionFragment: "queryExit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queryJoin", data: BytesLike): Result;

  events: {};
}

export interface IBalancerHelpers extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBalancerHelpersInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    queryExit(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    queryJoin(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  queryExit(
    poolId: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    request: IBalancerVault.ExitPoolRequestStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  queryJoin(
    poolId: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    request: IBalancerVault.JoinPoolRequestStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    queryExit(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & { bptIn: BigNumber; amountsOut: BigNumber[] }
    >;

    queryJoin(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & { bptOut: BigNumber; amountsIn: BigNumber[] }
    >;
  };

  filters: {};

  estimateGas: {
    queryExit(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    queryJoin(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    queryExit(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.ExitPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    queryJoin(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

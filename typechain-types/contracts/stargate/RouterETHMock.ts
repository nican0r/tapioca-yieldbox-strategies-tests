/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
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

export interface RouterETHMockInterface extends utils.Interface {
  functions: {
    "addLiquidityETH()": FunctionFragment;
    "lpToken()": FunctionFragment;
    "poolId()": FunctionFragment;
    "stargateRouter()": FunctionFragment;
    "stgRouter()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addLiquidityETH"
      | "lpToken"
      | "poolId"
      | "stargateRouter"
      | "stgRouter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidityETH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lpToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stargateRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stgRouter", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addLiquidityETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stargateRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stgRouter", data: BytesLike): Result;

  events: {};
}

export interface RouterETHMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RouterETHMockInterface;

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
    addLiquidityETH(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lpToken(overrides?: CallOverrides): Promise<[string]>;

    poolId(overrides?: CallOverrides): Promise<[BigNumber]>;

    stargateRouter(overrides?: CallOverrides): Promise<[string]>;

    stgRouter(overrides?: CallOverrides): Promise<[string]>;
  };

  addLiquidityETH(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lpToken(overrides?: CallOverrides): Promise<string>;

  poolId(overrides?: CallOverrides): Promise<BigNumber>;

  stargateRouter(overrides?: CallOverrides): Promise<string>;

  stgRouter(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addLiquidityETH(overrides?: CallOverrides): Promise<void>;

    lpToken(overrides?: CallOverrides): Promise<string>;

    poolId(overrides?: CallOverrides): Promise<BigNumber>;

    stargateRouter(overrides?: CallOverrides): Promise<string>;

    stgRouter(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addLiquidityETH(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lpToken(overrides?: CallOverrides): Promise<BigNumber>;

    poolId(overrides?: CallOverrides): Promise<BigNumber>;

    stargateRouter(overrides?: CallOverrides): Promise<BigNumber>;

    stgRouter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidityETH(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stargateRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stgRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

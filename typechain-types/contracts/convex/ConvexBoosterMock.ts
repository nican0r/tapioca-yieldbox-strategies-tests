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

export declare namespace IConvexBooster {
  export type PoolInfoStruct = {
    lptoken: PromiseOrValue<string>;
    token: PromiseOrValue<string>;
    gauge: PromiseOrValue<string>;
    crvRewards: PromiseOrValue<string>;
    stash: PromiseOrValue<string>;
    shutdown: PromiseOrValue<boolean>;
  };

  export type PoolInfoStructOutput = [
    string,
    string,
    string,
    string,
    string,
    boolean
  ] & {
    lptoken: string;
    token: string;
    gauge: string;
    crvRewards: string;
    stash: string;
    shutdown: boolean;
  };
}

export interface ConvexBoosterMockInterface extends utils.Interface {
  functions: {
    "crvRewards()": FunctionFragment;
    "deposit(uint256,uint256,bool)": FunctionFragment;
    "lpToken()": FunctionFragment;
    "poolInfo(uint256)": FunctionFragment;
    "receiptToken()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "crvRewards"
      | "deposit"
      | "lpToken"
      | "poolInfo"
      | "receiptToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "crvRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(functionFragment: "lpToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "receiptToken",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "crvRewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiptToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ConvexBoosterMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConvexBoosterMockInterface;

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
    crvRewards(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      arg0: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lpToken(overrides?: CallOverrides): Promise<[string]>;

    poolInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IConvexBooster.PoolInfoStructOutput]>;

    receiptToken(overrides?: CallOverrides): Promise<[string]>;
  };

  crvRewards(overrides?: CallOverrides): Promise<string>;

  deposit(
    arg0: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lpToken(overrides?: CallOverrides): Promise<string>;

  poolInfo(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IConvexBooster.PoolInfoStructOutput>;

  receiptToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    crvRewards(overrides?: CallOverrides): Promise<string>;

    deposit(
      arg0: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lpToken(overrides?: CallOverrides): Promise<string>;

    poolInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IConvexBooster.PoolInfoStructOutput>;

    receiptToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    crvRewards(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      arg0: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lpToken(overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiptToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    crvRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      arg0: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiptToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
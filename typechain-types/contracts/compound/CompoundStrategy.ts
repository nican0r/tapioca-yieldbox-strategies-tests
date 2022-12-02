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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface CompoundStrategyInterface extends utils.Interface {
  functions: {
    "cToken()": FunctionFragment;
    "cheapWithdrawable()": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "compound(bytes)": FunctionFragment;
    "compoundAmount()": FunctionFragment;
    "contractAddress()": FunctionFragment;
    "currentBalance()": FunctionFragment;
    "depositThreshold()": FunctionFragment;
    "deposited(uint256)": FunctionFragment;
    "description()": FunctionFragment;
    "emergencyWithdraw()": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "setDepositThreshold(uint256)": FunctionFragment;
    "tokenId()": FunctionFragment;
    "tokenType()": FunctionFragment;
    "transferOwnership(address,bool,bool)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
    "withdrawable()": FunctionFragment;
    "wrappedNative()": FunctionFragment;
    "yieldBox()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cToken"
      | "cheapWithdrawable"
      | "claimOwnership"
      | "compound"
      | "compoundAmount"
      | "contractAddress"
      | "currentBalance"
      | "depositThreshold"
      | "deposited"
      | "description"
      | "emergencyWithdraw"
      | "name"
      | "owner"
      | "pendingOwner"
      | "setDepositThreshold"
      | "tokenId"
      | "tokenType"
      | "transferOwnership"
      | "withdraw"
      | "withdrawable"
      | "wrappedNative"
      | "yieldBox"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "cToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cheapWithdrawable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "compound",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "compoundAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposited",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositThreshold",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "tokenId", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenType", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedNative",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "yieldBox", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cheapWithdrawable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "compound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "compoundAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposited", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenType", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrappedNative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldBox", data: BytesLike): Result;

  events: {
    "AmountDeposited(uint256)": EventFragment;
    "AmountQueued(uint256)": EventFragment;
    "AmountWithdrawn(address,uint256)": EventFragment;
    "DepositThreshold(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AmountDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AmountQueued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AmountWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositThreshold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AmountDepositedEventObject {
  amount: BigNumber;
}
export type AmountDepositedEvent = TypedEvent<
  [BigNumber],
  AmountDepositedEventObject
>;

export type AmountDepositedEventFilter = TypedEventFilter<AmountDepositedEvent>;

export interface AmountQueuedEventObject {
  amount: BigNumber;
}
export type AmountQueuedEvent = TypedEvent<
  [BigNumber],
  AmountQueuedEventObject
>;

export type AmountQueuedEventFilter = TypedEventFilter<AmountQueuedEvent>;

export interface AmountWithdrawnEventObject {
  to: string;
  amount: BigNumber;
}
export type AmountWithdrawnEvent = TypedEvent<
  [string, BigNumber],
  AmountWithdrawnEventObject
>;

export type AmountWithdrawnEventFilter = TypedEventFilter<AmountWithdrawnEvent>;

export interface DepositThresholdEventObject {
  _old: BigNumber;
  _new: BigNumber;
}
export type DepositThresholdEvent = TypedEvent<
  [BigNumber, BigNumber],
  DepositThresholdEventObject
>;

export type DepositThresholdEventFilter =
  TypedEventFilter<DepositThresholdEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface CompoundStrategy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CompoundStrategyInterface;

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
    cToken(overrides?: CallOverrides): Promise<[string]>;

    cheapWithdrawable(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    compound(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    compoundAmount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { result: BigNumber }>;

    contractAddress(overrides?: CallOverrides): Promise<[string]>;

    currentBalance(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    depositThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    description(
      overrides?: CallOverrides
    ): Promise<[string] & { description_: string }>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string] & { name_: string }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    setDepositThreshold(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenType(overrides?: CallOverrides): Promise<[number]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawable(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    wrappedNative(overrides?: CallOverrides): Promise<[string]>;

    yieldBox(overrides?: CallOverrides): Promise<[string]>;
  };

  cToken(overrides?: CallOverrides): Promise<string>;

  cheapWithdrawable(overrides?: CallOverrides): Promise<BigNumber>;

  claimOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  compound(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  compoundAmount(overrides?: CallOverrides): Promise<BigNumber>;

  contractAddress(overrides?: CallOverrides): Promise<string>;

  currentBalance(overrides?: CallOverrides): Promise<BigNumber>;

  depositThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  deposited(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  description(overrides?: CallOverrides): Promise<string>;

  emergencyWithdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  setDepositThreshold(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenId(overrides?: CallOverrides): Promise<BigNumber>;

  tokenType(overrides?: CallOverrides): Promise<number>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    direct: PromiseOrValue<boolean>,
    renounce: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawable(overrides?: CallOverrides): Promise<BigNumber>;

  wrappedNative(overrides?: CallOverrides): Promise<string>;

  yieldBox(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cToken(overrides?: CallOverrides): Promise<string>;

    cheapWithdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    compound(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    compoundAmount(overrides?: CallOverrides): Promise<BigNumber>;

    contractAddress(overrides?: CallOverrides): Promise<string>;

    currentBalance(overrides?: CallOverrides): Promise<BigNumber>;

    depositThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    description(overrides?: CallOverrides): Promise<string>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    setDepositThreshold(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenId(overrides?: CallOverrides): Promise<BigNumber>;

    tokenType(overrides?: CallOverrides): Promise<number>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    wrappedNative(overrides?: CallOverrides): Promise<string>;

    yieldBox(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AmountDeposited(uint256)"(amount?: null): AmountDepositedEventFilter;
    AmountDeposited(amount?: null): AmountDepositedEventFilter;

    "AmountQueued(uint256)"(amount?: null): AmountQueuedEventFilter;
    AmountQueued(amount?: null): AmountQueuedEventFilter;

    "AmountWithdrawn(address,uint256)"(
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): AmountWithdrawnEventFilter;
    AmountWithdrawn(
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): AmountWithdrawnEventFilter;

    "DepositThreshold(uint256,uint256)"(
      _old?: null,
      _new?: null
    ): DepositThresholdEventFilter;
    DepositThreshold(_old?: null, _new?: null): DepositThresholdEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    cToken(overrides?: CallOverrides): Promise<BigNumber>;

    cheapWithdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    compound(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    compoundAmount(overrides?: CallOverrides): Promise<BigNumber>;

    contractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    currentBalance(overrides?: CallOverrides): Promise<BigNumber>;

    depositThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    setDepositThreshold(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenId(overrides?: CallOverrides): Promise<BigNumber>;

    tokenType(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    wrappedNative(overrides?: CallOverrides): Promise<BigNumber>;

    yieldBox(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cheapWithdrawable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    compound(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    compoundAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contractAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDepositThreshold(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wrappedNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

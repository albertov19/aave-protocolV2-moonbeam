/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface LendingPoolInterface extends Interface {
  functions: {
    LENDINGPOOL_REVISION: TypedFunctionDescription<{ encode([]: []): string }>;

    UINT_MAX_VALUE: TypedFunctionDescription<{ encode([]: []): string }>;

    addressesProvider: TypedFunctionDescription<{ encode([]: []): string }>;

    balanceDecreaseAllowed: TypedFunctionDescription<{
      encode([_reserve, _user, _amount]: [
        string,
        string,
        BigNumberish
      ]): string;
    }>;

    borrow: TypedFunctionDescription<{
      encode([_reserve, _amount, _interestRateMode, _referralCode]: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    deposit: TypedFunctionDescription<{
      encode([_reserve, _amount, _referralCode]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    disableReserveAsCollateral: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    enableReserveAsCollateral: TypedFunctionDescription<{
      encode([
        _reserve,
        _baseLTVasCollateral,
        _liquidationThreshold,
        _liquidationBonus
      ]: [string, BigNumberish, BigNumberish, BigNumberish]): string;
    }>;

    flashLoan: TypedFunctionDescription<{
      encode([_receiver, _reserve, _amount, _params]: [
        string,
        string,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    getReserveConfigurationData: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveData: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveNormalizedIncome: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveNormalizedVariableDebt: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserves: TypedFunctionDescription<{ encode([]: []): string }>;

    getUserAccountData: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    getUserReserveData: TypedFunctionDescription<{
      encode([_reserve, _user]: [string, string]): string;
    }>;

    initReserve: TypedFunctionDescription<{
      encode([
        _reserve,
        _aTokenAddress,
        _stableDebtAddress,
        _variableDebtAddress,
        _decimals,
        _interestRateStrategyAddress
      ]: [string, string, string, string, BigNumberish, string]): string;
    }>;

    initialize: TypedFunctionDescription<{
      encode([_addressesProvider]: [string]): string;
    }>;

    liquidationCall: TypedFunctionDescription<{
      encode([_collateral, _reserve, _user, _purchaseAmount, _receiveAToken]: [
        string,
        string,
        string,
        BigNumberish,
        boolean
      ]): string;
    }>;

    rebalanceStableBorrowRate: TypedFunctionDescription<{
      encode([_reserve, _user]: [string, string]): string;
    }>;

    redeemUnderlying: TypedFunctionDescription<{
      encode([_reserve, _user, _amount, _aTokenBalanceAfterRedeem]: [
        string,
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    repay: TypedFunctionDescription<{
      encode([_reserve, _amount, _rateMode, _onBehalfOf]: [
        string,
        BigNumberish,
        BigNumberish,
        string
      ]): string;
    }>;

    reservesList: TypedFunctionDescription<{
      encode([]: [BigNumberish]): string;
    }>;

    setReserveActive: TypedFunctionDescription<{
      encode([_reserve, _active]: [string, boolean]): string;
    }>;

    setReserveBaseLTVasCollateral: TypedFunctionDescription<{
      encode([_reserve, _ltv]: [string, BigNumberish]): string;
    }>;

    setReserveBorrowingEnabled: TypedFunctionDescription<{
      encode([_reserve, _borrowingEnabled, _stableBorrowRateEnabled]: [
        string,
        boolean,
        boolean
      ]): string;
    }>;

    setReserveDecimals: TypedFunctionDescription<{
      encode([_reserve, _decimals]: [string, BigNumberish]): string;
    }>;

    setReserveFreeze: TypedFunctionDescription<{
      encode([_reserve, _isFreezed]: [string, boolean]): string;
    }>;

    setReserveInterestRateStrategyAddress: TypedFunctionDescription<{
      encode([_reserve, _rateStrategyAddress]: [string, string]): string;
    }>;

    setReserveLiquidationBonus: TypedFunctionDescription<{
      encode([_reserve, _bonus]: [string, BigNumberish]): string;
    }>;

    setReserveLiquidationThreshold: TypedFunctionDescription<{
      encode([_reserve, _threshold]: [string, BigNumberish]): string;
    }>;

    setReserveStableBorrowRateEnabled: TypedFunctionDescription<{
      encode([_reserve, _enabled]: [string, boolean]): string;
    }>;

    setUserUseReserveAsCollateral: TypedFunctionDescription<{
      encode([_reserve, _useAsCollateral]: [string, boolean]): string;
    }>;

    swapBorrowRateMode: TypedFunctionDescription<{
      encode([_reserve, _rateMode]: [string, BigNumberish]): string;
    }>;
  };

  events: {
    Borrow: TypedEventDescription<{
      encodeTopics([
        _reserve,
        _user,
        _amount,
        _borrowRateMode,
        _borrowRate,
        _referral,
        _timestamp
      ]: [
        string | null,
        string | null,
        null,
        null,
        null,
        BigNumberish | null,
        null
      ]): string[];
    }>;

    Deposit: TypedEventDescription<{
      encodeTopics([_reserve, _user, _amount, _referral, _timestamp]: [
        string | null,
        string | null,
        null,
        BigNumberish | null,
        null
      ]): string[];
    }>;

    FlashLoan: TypedEventDescription<{
      encodeTopics([
        _target,
        _reserve,
        _amount,
        _totalFee,
        _protocolFee,
        _timestamp
      ]: [string | null, string | null, null, null, null, null]): string[];
    }>;

    LiquidationCall: TypedEventDescription<{
      encodeTopics([
        _collateral,
        _reserve,
        _user,
        _purchaseAmount,
        _liquidatedCollateralAmount,
        _accruedBorrowInterest,
        _liquidator,
        _receiveAToken,
        _timestamp
      ]: [
        string | null,
        string | null,
        string | null,
        null,
        null,
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    OriginationFeeLiquidated: TypedEventDescription<{
      encodeTopics([
        _collateral,
        _reserve,
        _user,
        _feeLiquidated,
        _liquidatedCollateralForFee,
        _timestamp
      ]: [
        string | null,
        string | null,
        string | null,
        null,
        null,
        null
      ]): string[];
    }>;

    RebalanceStableBorrowRate: TypedEventDescription<{
      encodeTopics([_reserve, _user, _timestamp]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    RedeemUnderlying: TypedEventDescription<{
      encodeTopics([_reserve, _user, _amount, _timestamp]: [
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    Repay: TypedEventDescription<{
      encodeTopics([_reserve, _user, _repayer, _amount, _timestamp]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    ReserveUsedAsCollateralDisabled: TypedEventDescription<{
      encodeTopics([_reserve, _user]: [string | null, string | null]): string[];
    }>;

    ReserveUsedAsCollateralEnabled: TypedEventDescription<{
      encodeTopics([_reserve, _user]: [string | null, string | null]): string[];
    }>;

    Swap: TypedEventDescription<{
      encodeTopics([_reserve, _user, _timestamp]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class LendingPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): LendingPool;
  attach(addressOrName: string): LendingPool;
  deployed(): Promise<LendingPool>;

  on(event: EventFilter | string, listener: Listener): LendingPool;
  once(event: EventFilter | string, listener: Listener): LendingPool;
  addListener(eventName: EventFilter | string, listener: Listener): LendingPool;
  removeAllListeners(eventName: EventFilter | string): LendingPool;
  removeListener(eventName: any, listener: Listener): LendingPool;

  interface: LendingPoolInterface;

  functions: {
    LENDINGPOOL_REVISION(): Promise<BigNumber>;

    UINT_MAX_VALUE(): Promise<BigNumber>;

    addressesProvider(): Promise<string>;

    balanceDecreaseAllowed(
      _reserve: string,
      _user: string,
      _amount: BigNumberish
    ): Promise<boolean>;

    borrow(
      _reserve: string,
      _amount: BigNumberish,
      _interestRateMode: BigNumberish,
      _referralCode: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deposit(
      _reserve: string,
      _amount: BigNumberish,
      _referralCode: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    disableReserveAsCollateral(
      _reserve: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    enableReserveAsCollateral(
      _reserve: string,
      _baseLTVasCollateral: BigNumberish,
      _liquidationThreshold: BigNumberish,
      _liquidationBonus: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    flashLoan(
      _receiver: string,
      _reserve: string,
      _amount: BigNumberish,
      _params: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getReserveConfigurationData(
      _reserve: string
    ): Promise<{
      ltv: BigNumber;
      liquidationThreshold: BigNumber;
      liquidationBonus: BigNumber;
      interestRateStrategyAddress: string;
      aTokenAddress: string;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      stableBorrowRateEnabled: boolean;
      isActive: boolean;
      isFreezed: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: string;
      4: string;
      5: boolean;
      6: boolean;
      7: boolean;
      8: boolean;
      9: boolean;
    }>;

    getReserveData(
      _reserve: string
    ): Promise<{
      availableLiquidity: BigNumber;
      totalBorrowsStable: BigNumber;
      totalBorrowsVariable: BigNumber;
      liquidityRate: BigNumber;
      variableBorrowRate: BigNumber;
      stableBorrowRate: BigNumber;
      averageStableBorrowRate: BigNumber;
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      lastUpdateTimestamp: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: number;
    }>;

    getReserveNormalizedIncome(_reserve: string): Promise<BigNumber>;

    getReserveNormalizedVariableDebt(_reserve: string): Promise<BigNumber>;

    getReserves(): Promise<string[]>;

    getUserAccountData(
      _user: string
    ): Promise<{
      totalCollateralETH: BigNumber;
      totalBorrowsETH: BigNumber;
      totalFeesETH: BigNumber;
      availableBorrowsETH: BigNumber;
      currentLiquidationThreshold: BigNumber;
      ltv: BigNumber;
      healthFactor: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
    }>;

    getUserReserveData(
      _reserve: string,
      _user: string
    ): Promise<{
      currentATokenBalance: BigNumber;
      currentStableBorrowBalance: BigNumber;
      currentVariableBorrowBalance: BigNumber;
      principalStableBorrowBalance: BigNumber;
      principalVariableBorrowBalance: BigNumber;
      stableBorrowRate: BigNumber;
      liquidityRate: BigNumber;
      variableBorrowIndex: BigNumber;
      stableRateLastUpdated: number;
      usageAsCollateralEnabled: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: number;
      9: boolean;
    }>;

    initReserve(
      _reserve: string,
      _aTokenAddress: string,
      _stableDebtAddress: string,
      _variableDebtAddress: string,
      _decimals: BigNumberish,
      _interestRateStrategyAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    initialize(
      _addressesProvider: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    liquidationCall(
      _collateral: string,
      _reserve: string,
      _user: string,
      _purchaseAmount: BigNumberish,
      _receiveAToken: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    rebalanceStableBorrowRate(
      _reserve: string,
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    redeemUnderlying(
      _reserve: string,
      _user: string,
      _amount: BigNumberish,
      _aTokenBalanceAfterRedeem: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    repay(
      _reserve: string,
      _amount: BigNumberish,
      _rateMode: BigNumberish,
      _onBehalfOf: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    reservesList(arg0: BigNumberish): Promise<string>;

    setReserveActive(
      _reserve: string,
      _active: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveBaseLTVasCollateral(
      _reserve: string,
      _ltv: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveBorrowingEnabled(
      _reserve: string,
      _borrowingEnabled: boolean,
      _stableBorrowRateEnabled: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveDecimals(
      _reserve: string,
      _decimals: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveFreeze(
      _reserve: string,
      _isFreezed: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveInterestRateStrategyAddress(
      _reserve: string,
      _rateStrategyAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveLiquidationBonus(
      _reserve: string,
      _bonus: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveLiquidationThreshold(
      _reserve: string,
      _threshold: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveStableBorrowRateEnabled(
      _reserve: string,
      _enabled: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setUserUseReserveAsCollateral(
      _reserve: string,
      _useAsCollateral: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    swapBorrowRateMode(
      _reserve: string,
      _rateMode: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  LENDINGPOOL_REVISION(): Promise<BigNumber>;

  UINT_MAX_VALUE(): Promise<BigNumber>;

  addressesProvider(): Promise<string>;

  balanceDecreaseAllowed(
    _reserve: string,
    _user: string,
    _amount: BigNumberish
  ): Promise<boolean>;

  borrow(
    _reserve: string,
    _amount: BigNumberish,
    _interestRateMode: BigNumberish,
    _referralCode: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  deposit(
    _reserve: string,
    _amount: BigNumberish,
    _referralCode: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  disableReserveAsCollateral(
    _reserve: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  enableReserveAsCollateral(
    _reserve: string,
    _baseLTVasCollateral: BigNumberish,
    _liquidationThreshold: BigNumberish,
    _liquidationBonus: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  flashLoan(
    _receiver: string,
    _reserve: string,
    _amount: BigNumberish,
    _params: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getReserveConfigurationData(
    _reserve: string
  ): Promise<{
    ltv: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationBonus: BigNumber;
    interestRateStrategyAddress: string;
    aTokenAddress: string;
    usageAsCollateralEnabled: boolean;
    borrowingEnabled: boolean;
    stableBorrowRateEnabled: boolean;
    isActive: boolean;
    isFreezed: boolean;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: string;
    4: string;
    5: boolean;
    6: boolean;
    7: boolean;
    8: boolean;
    9: boolean;
  }>;

  getReserveData(
    _reserve: string
  ): Promise<{
    availableLiquidity: BigNumber;
    totalBorrowsStable: BigNumber;
    totalBorrowsVariable: BigNumber;
    liquidityRate: BigNumber;
    variableBorrowRate: BigNumber;
    stableBorrowRate: BigNumber;
    averageStableBorrowRate: BigNumber;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
    lastUpdateTimestamp: number;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: BigNumber;
    8: BigNumber;
    9: number;
  }>;

  getReserveNormalizedIncome(_reserve: string): Promise<BigNumber>;

  getReserveNormalizedVariableDebt(_reserve: string): Promise<BigNumber>;

  getReserves(): Promise<string[]>;

  getUserAccountData(
    _user: string
  ): Promise<{
    totalCollateralETH: BigNumber;
    totalBorrowsETH: BigNumber;
    totalFeesETH: BigNumber;
    availableBorrowsETH: BigNumber;
    currentLiquidationThreshold: BigNumber;
    ltv: BigNumber;
    healthFactor: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
  }>;

  getUserReserveData(
    _reserve: string,
    _user: string
  ): Promise<{
    currentATokenBalance: BigNumber;
    currentStableBorrowBalance: BigNumber;
    currentVariableBorrowBalance: BigNumber;
    principalStableBorrowBalance: BigNumber;
    principalVariableBorrowBalance: BigNumber;
    stableBorrowRate: BigNumber;
    liquidityRate: BigNumber;
    variableBorrowIndex: BigNumber;
    stableRateLastUpdated: number;
    usageAsCollateralEnabled: boolean;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: BigNumber;
    8: number;
    9: boolean;
  }>;

  initReserve(
    _reserve: string,
    _aTokenAddress: string,
    _stableDebtAddress: string,
    _variableDebtAddress: string,
    _decimals: BigNumberish,
    _interestRateStrategyAddress: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  initialize(
    _addressesProvider: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  liquidationCall(
    _collateral: string,
    _reserve: string,
    _user: string,
    _purchaseAmount: BigNumberish,
    _receiveAToken: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  rebalanceStableBorrowRate(
    _reserve: string,
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  redeemUnderlying(
    _reserve: string,
    _user: string,
    _amount: BigNumberish,
    _aTokenBalanceAfterRedeem: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  repay(
    _reserve: string,
    _amount: BigNumberish,
    _rateMode: BigNumberish,
    _onBehalfOf: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  reservesList(arg0: BigNumberish): Promise<string>;

  setReserveActive(
    _reserve: string,
    _active: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveBaseLTVasCollateral(
    _reserve: string,
    _ltv: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveBorrowingEnabled(
    _reserve: string,
    _borrowingEnabled: boolean,
    _stableBorrowRateEnabled: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveDecimals(
    _reserve: string,
    _decimals: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveFreeze(
    _reserve: string,
    _isFreezed: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveInterestRateStrategyAddress(
    _reserve: string,
    _rateStrategyAddress: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveLiquidationBonus(
    _reserve: string,
    _bonus: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveLiquidationThreshold(
    _reserve: string,
    _threshold: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveStableBorrowRateEnabled(
    _reserve: string,
    _enabled: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setUserUseReserveAsCollateral(
    _reserve: string,
    _useAsCollateral: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  swapBorrowRateMode(
    _reserve: string,
    _rateMode: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Borrow(
      _reserve: string | null,
      _user: string | null,
      _amount: null,
      _borrowRateMode: null,
      _borrowRate: null,
      _referral: BigNumberish | null,
      _timestamp: null
    ): EventFilter;

    Deposit(
      _reserve: string | null,
      _user: string | null,
      _amount: null,
      _referral: BigNumberish | null,
      _timestamp: null
    ): EventFilter;

    FlashLoan(
      _target: string | null,
      _reserve: string | null,
      _amount: null,
      _totalFee: null,
      _protocolFee: null,
      _timestamp: null
    ): EventFilter;

    LiquidationCall(
      _collateral: string | null,
      _reserve: string | null,
      _user: string | null,
      _purchaseAmount: null,
      _liquidatedCollateralAmount: null,
      _accruedBorrowInterest: null,
      _liquidator: null,
      _receiveAToken: null,
      _timestamp: null
    ): EventFilter;

    OriginationFeeLiquidated(
      _collateral: string | null,
      _reserve: string | null,
      _user: string | null,
      _feeLiquidated: null,
      _liquidatedCollateralForFee: null,
      _timestamp: null
    ): EventFilter;

    RebalanceStableBorrowRate(
      _reserve: string | null,
      _user: string | null,
      _timestamp: null
    ): EventFilter;

    RedeemUnderlying(
      _reserve: string | null,
      _user: string | null,
      _amount: null,
      _timestamp: null
    ): EventFilter;

    Repay(
      _reserve: string | null,
      _user: string | null,
      _repayer: string | null,
      _amount: null,
      _timestamp: null
    ): EventFilter;

    ReserveUsedAsCollateralDisabled(
      _reserve: string | null,
      _user: string | null
    ): EventFilter;

    ReserveUsedAsCollateralEnabled(
      _reserve: string | null,
      _user: string | null
    ): EventFilter;

    Swap(
      _reserve: string | null,
      _user: string | null,
      _timestamp: null
    ): EventFilter;
  };

  estimate: {
    LENDINGPOOL_REVISION(): Promise<BigNumber>;

    UINT_MAX_VALUE(): Promise<BigNumber>;

    addressesProvider(): Promise<BigNumber>;

    balanceDecreaseAllowed(
      _reserve: string,
      _user: string,
      _amount: BigNumberish
    ): Promise<BigNumber>;

    borrow(
      _reserve: string,
      _amount: BigNumberish,
      _interestRateMode: BigNumberish,
      _referralCode: BigNumberish
    ): Promise<BigNumber>;

    deposit(
      _reserve: string,
      _amount: BigNumberish,
      _referralCode: BigNumberish
    ): Promise<BigNumber>;

    disableReserveAsCollateral(_reserve: string): Promise<BigNumber>;

    enableReserveAsCollateral(
      _reserve: string,
      _baseLTVasCollateral: BigNumberish,
      _liquidationThreshold: BigNumberish,
      _liquidationBonus: BigNumberish
    ): Promise<BigNumber>;

    flashLoan(
      _receiver: string,
      _reserve: string,
      _amount: BigNumberish,
      _params: Arrayish
    ): Promise<BigNumber>;

    getReserveConfigurationData(_reserve: string): Promise<BigNumber>;

    getReserveData(_reserve: string): Promise<BigNumber>;

    getReserveNormalizedIncome(_reserve: string): Promise<BigNumber>;

    getReserveNormalizedVariableDebt(_reserve: string): Promise<BigNumber>;

    getReserves(): Promise<BigNumber>;

    getUserAccountData(_user: string): Promise<BigNumber>;

    getUserReserveData(_reserve: string, _user: string): Promise<BigNumber>;

    initReserve(
      _reserve: string,
      _aTokenAddress: string,
      _stableDebtAddress: string,
      _variableDebtAddress: string,
      _decimals: BigNumberish,
      _interestRateStrategyAddress: string
    ): Promise<BigNumber>;

    initialize(_addressesProvider: string): Promise<BigNumber>;

    liquidationCall(
      _collateral: string,
      _reserve: string,
      _user: string,
      _purchaseAmount: BigNumberish,
      _receiveAToken: boolean
    ): Promise<BigNumber>;

    rebalanceStableBorrowRate(
      _reserve: string,
      _user: string
    ): Promise<BigNumber>;

    redeemUnderlying(
      _reserve: string,
      _user: string,
      _amount: BigNumberish,
      _aTokenBalanceAfterRedeem: BigNumberish
    ): Promise<BigNumber>;

    repay(
      _reserve: string,
      _amount: BigNumberish,
      _rateMode: BigNumberish,
      _onBehalfOf: string
    ): Promise<BigNumber>;

    reservesList(arg0: BigNumberish): Promise<BigNumber>;

    setReserveActive(_reserve: string, _active: boolean): Promise<BigNumber>;

    setReserveBaseLTVasCollateral(
      _reserve: string,
      _ltv: BigNumberish
    ): Promise<BigNumber>;

    setReserveBorrowingEnabled(
      _reserve: string,
      _borrowingEnabled: boolean,
      _stableBorrowRateEnabled: boolean
    ): Promise<BigNumber>;

    setReserveDecimals(
      _reserve: string,
      _decimals: BigNumberish
    ): Promise<BigNumber>;

    setReserveFreeze(_reserve: string, _isFreezed: boolean): Promise<BigNumber>;

    setReserveInterestRateStrategyAddress(
      _reserve: string,
      _rateStrategyAddress: string
    ): Promise<BigNumber>;

    setReserveLiquidationBonus(
      _reserve: string,
      _bonus: BigNumberish
    ): Promise<BigNumber>;

    setReserveLiquidationThreshold(
      _reserve: string,
      _threshold: BigNumberish
    ): Promise<BigNumber>;

    setReserveStableBorrowRateEnabled(
      _reserve: string,
      _enabled: boolean
    ): Promise<BigNumber>;

    setUserUseReserveAsCollateral(
      _reserve: string,
      _useAsCollateral: boolean
    ): Promise<BigNumber>;

    swapBorrowRateMode(
      _reserve: string,
      _rateMode: BigNumberish
    ): Promise<BigNumber>;
  };
}

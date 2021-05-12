import BigNumber from 'bignumber.js';
import { oneEther, oneRay, RAY, ZERO_ADDRESS, MOCK_CHAINLINK_AGGREGATORS_PRICES } from '../../helpers/constants';
import { ICommonConfiguration, eMoonbeam } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  ATokenNamePrefix: 'Aave moonbase Market',
  StableDebtTokenNamePrefix: 'Aave moonbase Market stable debt',
  VariableDebtTokenNamePrefix: 'Aave moonbase Market variable debt',
  SymbolPrefix: 'm',
  ProviderId: 0, // Overriden in index.ts
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96',
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  // TODO: reorg alphabetically, checking the reason of tests failing
  LendingRateOracleRatesCommon: {
    WETH: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    DAI: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDC: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDT: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    WBTC: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    Wmoonbase: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eMoonbeam.dev]: undefined,
    [eMoonbeam.moonbase]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdmin: {
    [eMoonbeam.dev]: undefined,
    [eMoonbeam.moonbase]: undefined,
  },
  LendingPool: {
    [eMoonbeam.dev]: '',
    [eMoonbeam.moonbase]: '0xABdC61Cd16e5111f335f4135B7A0e65Cc7F86327',
  },
  LendingPoolConfigurator: {
    [eMoonbeam.dev]: '',
    [eMoonbeam.moonbase]: '0x17c4A170FFF882862F656597889016D3a6073534',
  },
  EmergencyAdminIndex: 1,
  ProviderRegistry: {
    [eMoonbeam.dev]: '0x569859d41499B4dDC28bfaA43915051FF0A38a6F', // TEMP
    [eMoonbeam.moonbase]: '0x28334e4791860a0c1eCF89a62B973ba04a5d643F',  // TEMP
  },
  ProviderRegistryOwner: {
    [eMoonbeam.dev]: '0x18d9bA2baEfBdE0FF137C4ad031427EF205f1Fd9', // TEMP
    [eMoonbeam.moonbase]: '0x85e4A467343c0dc4aDAB74Af84448D9c45D8ae6F',  // TEMP
  },
  LendingRateOracle: {
    [eMoonbeam.dev]: '',
    [eMoonbeam.moonbase]: '',
  },  
  LendingPoolCollateralManager: {
    [eMoonbeam.dev]: '',
    [eMoonbeam.moonbase]: '0x9Af76e0575D139570D3B4c821567Fe935E8c25C5',
  },
  TokenDistributor: {
    [eMoonbeam.dev]: '',
    [eMoonbeam.moonbase]: '',
  },
  WethGateway: {
    [eMoonbeam.dev]: '',
    [eMoonbeam.moonbase]: '0x15A46f5073789b7D16F6F46632aE50Bae838d938',
  },
  AaveOracle: {
    [eMoonbeam.dev]: '',
    [eMoonbeam.moonbase]: '0x1B38fa90596F2C25bCf1B193A6c6a718349AFDfC',
  },
  FallbackOracle: {
    [eMoonbeam.dev]: ZERO_ADDRESS,
    [eMoonbeam.moonbase]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    [eMoonbeam.moonbase]: {
      UNI: '0xeBf79a4aefCFf0E55203fAdEE93417A9E040FEC1', //UNI active on moonbase alpha
      AAVE: '0x8F23f3cc745993c3164Cb7a852497091A452aA6d', //AAVE contract active on moonbase alpha
      LINK: '0x4b98A257b73DE965115D8FcD8aCe76249354D994', //LINK active on moonbase alpha
      WETH: '0xfE6676f8A96005445848632a5A2D67721d584dAd', //ETH active on moonbase alpha
    },
    [eMoonbeam.dev]: {
      DAI: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
    },
  },
  ReserveAssets: {
    [eMoonbeam.moonbase]: {},
    [eMoonbeam.dev]: {},
  },
  ReservesConfig: {},
  ATokenDomainSeparator: {
    [eMoonbeam.dev]: '',
    [eMoonbeam.moonbase]: '',
  },
  WETH: {
    [eMoonbeam.dev]: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 
    [eMoonbeam.moonbase]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',  
  },
  ReserveFactorTreasuryAddress: {
    [eMoonbeam.dev]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',   // TEMP 
    [eMoonbeam.moonbase]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',    // TEMP  
  },
};

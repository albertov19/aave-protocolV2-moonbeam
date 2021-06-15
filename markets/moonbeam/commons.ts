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
    WDEV: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
    MERC: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
    VEN: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
    ERTH: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
    MARS: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
    JUP: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
    SAT: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
    UNS: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
    NEPT: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
    PLUT: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eMoonbeam.dev]: '0x3B939FeaD1557C741Ff06492FD0127bd287A421e',  // TEMP
    [eMoonbeam.moonbase]: '0x3B939FeaD1557C741Ff06492FD0127bd287A421e',  // TEMP
  },
  PoolAdminIndex: 0,
  EmergencyAdmin: {
    [eMoonbeam.dev]: '0x3B939FeaD1557C741Ff06492FD0127bd287A421e',  // TEMP
    [eMoonbeam.moonbase]: '0x3B939FeaD1557C741Ff06492FD0127bd287A421e',  // TEMP
  },
  LendingPool: {
    [eMoonbeam.dev]: '',
    [eMoonbeam.moonbase]: '',
  },
  LendingPoolConfigurator: {
    [eMoonbeam.dev]: '0xa84caB60db6541573a091e5C622fB79e175E17be',
    [eMoonbeam.moonbase]: '0xa84caB60db6541573a091e5C622fB79e175E17be',
  },
  EmergencyAdminIndex: 1,
  ProviderRegistry: {
    [eMoonbeam.dev]: '0x569859d41499B4dDC28bfaA43915051FF0A38a6F', // TEMP
    [eMoonbeam.moonbase]: '0x28334e4791860a0c1eCF89a62B973ba04a5d643F',  // TEMP
  },
  ProviderRegistryOwner: {
    [eMoonbeam.dev]: '0x18d9bA2baEfBdE0FF137C4ad031427EF205f1Fd9', // TEMP
    [eMoonbeam.moonbase]: '0x3B939FeaD1557C741Ff06492FD0127bd287A421e',  // TEMP
  },
  LendingRateOracle: {
    [eMoonbeam.dev]: '', //TEMPORARY
    [eMoonbeam.moonbase]: '', //TEMPORARY
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
    [eMoonbeam.moonbase]: '',
  },
  FallbackOracle: {
    [eMoonbeam.dev]: ZERO_ADDRESS,
    [eMoonbeam.moonbase]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    [eMoonbeam.moonbase]: {
      // UNI: '0x5Cd72748F94a8597f563D92687A8D2A5074b10E5', //UNI active on moonbase alpha
      // AAVE: '0xD1e52C81FD72fFc6dA3bF083297E6C37852E93DA', //AAVE contract active on moonbase alpha
      // LINK: '0xC58B34ea686Db2d567835de7AB58fC678b6f186A', //LINK active on moonbase alpha
      // WETH: '0xE33691Ba3cF532D4025cF0f47679eFe430d4A618', //ETH active on moonbase alpha
      MERC: '0x5Cd72748F94a8597f563D92687A8D2A5074b10E5',
      VEN: '0x5Cd72748F94a8597f563D92687A8D2A5074b10E5',
      ERTH: '0x5Cd72748F94a8597f563D92687A8D2A5074b10E5',
      MARS: '0x5Cd72748F94a8597f563D92687A8D2A5074b10E5',
      JUP: '0x5Cd72748F94a8597f563D92687A8D2A5074b10E5',
      SAT: '0x5Cd72748F94a8597f563D92687A8D2A5074b10E5',
      UNS: '0x5Cd72748F94a8597f563D92687A8D2A5074b10E5',
      NEPT: '0x5Cd72748F94a8597f563D92687A8D2A5074b10E5',
      PLUT: '0x5Cd72748F94a8597f563D92687A8D2A5074b10E5',
      USD: '0x5Cd72748F94a8597f563D92687A8D2A5074b10E5',
    },
    [eMoonbeam.dev]: {
      DAI: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
    },
  },
  ReserveAssets: {
    [eMoonbeam.moonbase]: {
      MERC: '0xf4706e316819C4B2F20f18B39D47cAd507807d65',
      VEN: '0xbb94A7C53Efc68A949218201E8248ACd24711E35',
      ERTH:  '0x5F50c08779c366667E327611cd9D2DC1EA376084',
      MARS: '0xd53f5eaE58e91a674a232e6B2460deE6B65E2725',
      JUP: '0x318612c00406C80f7B018Fc53ba1A01DA6C97e90',
      SAT: '0x5f9D3737a1192103d78CBe2EcADAF2AE824988b4',
      UNS: '0x03B7007b5204fDDB7cd19Bf2866f29056162433f',
      NEPT: '0x9d232068e61C3ACb71685a6254a601e236Db8Dda',
      PLUT: '0xB14B8365b64C15346A9F9834c8f3b62cA77AeF56',
    },
    [eMoonbeam.dev]: {
      MERC: '0xf4706e316819C4B2F20f18B39D47cAd507807d65',
      VEN: '0xbb94A7C53Efc68A949218201E8248ACd24711E35',
      ERTH:  '0x5F50c08779c366667E327611cd9D2DC1EA376084',
      MARS: '0xd53f5eaE58e91a674a232e6B2460deE6B65E2725',
      JUP: '0x318612c00406C80f7B018Fc53ba1A01DA6C97e90',
      SAT: '0x5f9D3737a1192103d78CBe2EcADAF2AE824988b4',
      UNS: '0x03B7007b5204fDDB7cd19Bf2866f29056162433f',
      NEPT: '0x9d232068e61C3ACb71685a6254a601e236Db8Dda',
      PLUT: '0xB14B8365b64C15346A9F9834c8f3b62cA77AeF56',
    },
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

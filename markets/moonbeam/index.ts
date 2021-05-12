import { oneRay, ZERO_ADDRESS } from '../../helpers/constants';
import { IMoonbeamConfiguration, eMoonbeam} from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyDAI,
  strategyUSDC,
  strategyUSDT,
  strategyWBTC,
  strategyWETH,
  strategyMoonbeam,
  strategyMatic,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const MoonbeamConfig: IMoonbeamConfiguration = {
  ...CommonsConfig,
  MarketId: 'Moonbeam Market',
  ProviderId: 3,    // Unknown?
  ReservesConfig: {
    WDEV: strategyMoonbeam,
    MERC: strategyMoonbeam,
    VEN: strategyMoonbeam,
    ERTH: strategyMoonbeam,
    MARS: strategyMoonbeam,
    JUP: strategyMoonbeam,
    SAT: strategyMoonbeam,
    UNS: strategyMoonbeam,
    NEPT: strategyMoonbeam,
    PLUT: strategyMoonbeam,
  },
  ReserveAssets: {
    [eMoonbeam.dev]: {
      //TBD assets for dev network
    },
    [eMoonbeam.moonbase]: { // Mock tokens with a simple "mint" function for Moonbase Alpha
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
};

export default MoonbeamConfig;

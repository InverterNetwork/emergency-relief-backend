import * as envLoader from 'load-env-var';

export const cryptoConfig = {
  cryptoKey: envLoader.loadString('CRYPTO_KEY'),
};

import * as envLoader from 'load-env-var';

import { loadEnvironment } from '@src/libs/utils/src';

const env = loadEnvironment(process.env.NODE_ENV);

export const environment = {
  ...env,
  port: envLoader.loadNumber('PORT'),
};

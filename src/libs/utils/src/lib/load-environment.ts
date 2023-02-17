import * as dotenv from 'dotenv';

import { InvalidEnvironmentException } from '@src/libs/exceptions/src';

type Env = 'production' | 'staging' | 'development';
type EnvPath = '.env.prod' | '.env.stag' | '.env.dev';
type Host = '0.0.0.0' | '127.0.0.1';

export function loadEnvironment(baseEnvironemnt: string): {
  env: Env;
  envPath: EnvPath;
  host: Host;
} {
  let envPath: EnvPath;
  let host: Host;

  switch (baseEnvironemnt) {
    case 'production': {
      envPath = '.env.prod';
      host = '0.0.0.0';
      break;
    }
    case 'staging': {
      envPath = '.env.stag';
      host = '0.0.0.0';
      break;
    }
    case 'development': {
      envPath = '.env.dev';
      host = '127.0.0.1';
      break;
    }
    default: {
      throw new InvalidEnvironmentException(baseEnvironemnt);
    }
  }

  dotenv.config({
    path: envPath,
  });

  return {
    env: baseEnvironemnt as Env,
    envPath,
    host,
  };
}

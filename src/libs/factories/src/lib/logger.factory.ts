import pino from 'pino';

import { awsConfig } from '@src/libs/configs/src';
import { CloudLogger, CloudLoggerOptions, ConsoleLogger } from '@src/libs/loggers/src';

export function createCloudLogger(streamName: string): pino.Logger<pino.LoggerOptions> {
  const cloudLoggerConfig: CloudLoggerOptions = {
    cloudWatchOptions: {
      serviceOptions: {
        region: awsConfig.region,
        credentials: {
          accessKeyId: awsConfig.accessKeyId,
          secretAccessKey: awsConfig.secretAccessKey,
        },
      },
      destinationOptions: {
        logGroupName: awsConfig.cloudWatch.logGroupName,
        logStreamName: streamName,
      },
    },
  };

  return new CloudLogger(cloudLoggerConfig).logger;
}

export function createConsoleLogger(): pino.Logger<pino.LoggerOptions> {
  return new ConsoleLogger().logger;
}

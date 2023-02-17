import * as envLoader from 'load-env-var';

export const awsConfig = {
  region: envLoader.loadString('AWS_REGION'),
  accessKeyId: envLoader.loadString('AWS_ACCESS_KEY_ID'),
  secretAccessKey: envLoader.loadString('AWS_SECRET_ACCESS_KEY'),
  cloudWatch: {
    logGroupName: envLoader.loadString('AWS_CLOUDWATCH_LOG_GROUP_NAME'),
  },
};

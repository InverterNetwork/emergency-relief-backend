import helmet from '@fastify/helmet';

import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

import { createFastify, createCloudLogger } from '@src/libs/factories/src';
import { globalExceptionFilter } from '@src/libs/filters/src';
import { CloudLoggingInterceptor } from '@src/libs/interceptors/src';
import { validationPipe } from '@src/libs/pipes/src';

export async function createApp(appModule: any, appName: string, env = 'development') {
  const adapter = await createFastify();

  const app = await NestFactory.create<NestFastifyApplication>(appModule, adapter);

  app.useGlobalFilters(globalExceptionFilter);

  app.useGlobalPipes(validationPipe);

  if (env === 'production' || env === 'staging') {
    const cloudLogger = createCloudLogger(appName);
    app.useGlobalInterceptors(new CloudLoggingInterceptor(cloudLogger));
  }

  app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  });

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  return app;
}

import { environment } from '@src/shared/configs/env.config';
import { appConfig } from '@src/shared/configs/app.config';

import { createApp } from '@src/libs/factories/src';

import { AppModule } from '@src/app.module';

async function bootstrap() {
  const app = await createApp(AppModule, appConfig.name, environment.env);
  await app.listen(environment.port, environment.host);
}

bootstrap();

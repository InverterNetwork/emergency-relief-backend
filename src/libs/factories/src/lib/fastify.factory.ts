import { FastifyAdapter } from '@nestjs/platform-fastify';

import { createConsoleLogger } from '@src/libs/factories/src';

export async function createFastify(): Promise<FastifyAdapter> {
  const adapter = new FastifyAdapter({
    logger: createConsoleLogger(),
  });

  return adapter;
}

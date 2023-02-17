import { Module } from '@nestjs/common';

import { PrismaService } from '@src/libs/services/src';

import { TransactionsService } from '@src/modules/transactions/transactions.service';

import { TransactionsController } from '@src/modules/transactions/transactions.controller';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, PrismaService],
})
export class TransactionsModule {}

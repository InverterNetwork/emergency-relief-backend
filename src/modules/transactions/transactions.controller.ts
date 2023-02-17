import { Body, Controller, Get, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { Transaction } from '@prisma/client';

import { DecryptionInterceptor } from '@src/libs/interceptors/src/lib/decryption.interceptor';

import { CreateTransactionDto } from '@src/modules/transactions/dto/create-transaction.dto';
import {
  FindAllByProjectIdParamsDto,
  FindAllByProjectIdQueryDto,
} from '@src/modules/transactions/dto/find-all-by-project-id.dto';

import { TransactionsService } from '@src/modules/transactions/transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('/project/:projectId')
  async findAllByProjectId(
    @Param() params: FindAllByProjectIdParamsDto,
    @Query() query: FindAllByProjectIdQueryDto,
  ): Promise<Transaction[]> {
    return this.transactionsService.findAllByProjectId(params.projectId, query.skip, query.take);
  }

  @UseInterceptors(DecryptionInterceptor)
  @Post('/')
  async create(@Body() dto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionsService.create(dto);
  }
}

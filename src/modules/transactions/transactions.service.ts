import { Injectable } from '@nestjs/common';
import { Transaction } from '@prisma/client';

import { PrismaService } from '@src/libs/services/src';

import { CreateTransactionDto } from '@src/modules/transactions/dto/create-transaction.dto';
import {
  ProjectDonationWalletNotFoundException,
  ProjectNotFoundExcepion,
} from '@src/shared/exceptions/project.exception';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async findAllByProjectId(projectId: number, skip?: number, take?: number): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({
      where: { projectId },
      skip,
      take,
    });
  }

  async create(dto: CreateTransactionDto): Promise<Transaction> {
    const project = await this.prisma.project.findUnique({
      where: { id: dto.projectId },
      include: {
        donationWallets: {
          where: { id: dto.toWalletId },
        },
      },
    });

    if (!project) {
      throw new ProjectNotFoundExcepion();
    }

    if (project.donationWallets.length === 0) {
      throw new ProjectDonationWalletNotFoundException();
    }

    const transaction = await this.prisma.transaction.create({
      data: {
        transactionHash: dto.transactionHash,
        fromWallet: dto.fromWallet,
        toWalletId: dto.toWalletId,
        projectId: dto.projectId,
        token: dto.token,
        amount: dto.amount,
      },
    });

    return transaction;
  }
}

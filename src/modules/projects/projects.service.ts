import { Injectable } from '@nestjs/common';

import { PrismaService } from '@src/libs/services/src';

import { Project } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Project[]> {
    return this.prisma.project.findMany({
      include: {
        donationWallets: true,
        categories: true,
        socialProfiles: true,
        credentials: true,
        partners: true,
      },
    });
  }

  async findAllByOwnerId(ownerId: number): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: { ownerId },
      include: {
        donationWallets: true,
        categories: true,
        socialProfiles: true,
        credentials: true,
        partners: true,
      },
    });
  }

  async findOneById(id: number): Promise<Project> {
    return this.prisma.project.findUnique({
      where: { id },
      include: {
        donationWallets: true,
        categories: true,
        socialProfiles: true,
        credentials: true,
        partners: true,
        transactions: {
          include: {
            toWallet: true,
          },
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });
  }
}

import { Injectable } from '@nestjs/common';

import { PrismaService } from '@src/libs/services/src';

import { Organization } from '@prisma/client';

@Injectable()
export class OrganizationsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Organization[]> {
    return this.prisma.organization.findMany({
      include: {
        wallets: true,
      },
    });
  }

  async findOneById(id: number): Promise<Organization> {
    return this.prisma.organization.findUnique({
      where: { id },
      include: {
        wallets: true,
      },
    });
  }
}

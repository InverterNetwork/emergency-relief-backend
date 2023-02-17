import { Module } from '@nestjs/common';

import { PrismaService } from '@src/libs/services/src';

import { OrganizationsService } from '@src/modules/organizations/organizations.service';

import { OrganizationsController } from '@src/modules/organizations/organizations.controller';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService, PrismaService],
})
export class OrganizationsModule {}

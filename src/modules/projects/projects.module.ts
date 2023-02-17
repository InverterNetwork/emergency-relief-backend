import { Module } from '@nestjs/common';

import { PrismaService } from '@src/libs/services/src';

import { ProjectsService } from '@src/modules/projects/projects.service';

import { ProjectsController } from '@src/modules/projects/projects.controller';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService],
})
export class ProjectsModule {}

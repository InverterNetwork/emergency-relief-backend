import { Controller, Get, Param } from '@nestjs/common';
import { Project } from '@prisma/client';

import { FindAllByByOwnerIdParamsDto } from '@src/modules/projects/dto/find-all-by-owner-id-params.dto';
import { FindOneByIdParamsDto } from '@src/modules/projects/dto/find-one-by-id-params.dto';
import { FindOneBySlugParamsDto } from '@src/modules/projects/dto/find-one-by-slug-params.dto';

import { ProjectsService } from '@src/modules/projects/projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('/')
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get('/:id')
  async findOneById(@Param() params: FindOneByIdParamsDto): Promise<Project> {
    return this.projectsService.findOneById(params.id);
  }

  @Get('/:slug')
  async findOneBySlug(@Param() params: FindOneBySlugParamsDto): Promise<Project> {
    return this.projectsService.findOneBySlug(params.slug);
  }

  @Get('/owner/:ownerId')
  async findAllByOwnerId(@Param() params: FindAllByByOwnerIdParamsDto): Promise<Project> {
    return this.projectsService.findOneById(params.ownerId);
  }
}

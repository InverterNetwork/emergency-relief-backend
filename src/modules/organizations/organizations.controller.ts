import { Controller, Get, Param } from '@nestjs/common';
import { Organization } from '@prisma/client';

import { FindOneByIdParamsDto } from '@src/modules/organizations/dto/find-one-by-id-params.dto';

import { OrganizationsService } from '@src/modules/organizations/organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get('/')
  async findAll(): Promise<Organization[]> {
    return this.organizationsService.findAll();
  }

  @Get('/:id')
  async findOneById(@Param() params: FindOneByIdParamsDto): Promise<Organization> {
    return this.organizationsService.findOneById(params.id);
  }
}

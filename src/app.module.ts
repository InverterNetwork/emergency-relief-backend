import { Module } from '@nestjs/common';

import { OrganizationsModule } from '@src/modules/organizations/organizations.module';
import { ProjectsModule } from '@src/modules/projects/projects.module';

@Module({
  imports: [OrganizationsModule, ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

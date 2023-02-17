import { Module } from '@nestjs/common';

import { OrganizationsModule } from '@src/modules/organizations/organizations.module';
import { ProjectsModule } from '@src/modules/projects/projects.module';
import { TransactionsModule } from '@src/modules/transactions/transactions.module';

@Module({
  imports: [OrganizationsModule, ProjectsModule, TransactionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

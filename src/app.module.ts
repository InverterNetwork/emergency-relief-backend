import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

import { OrganizationsModule } from '@src/modules/organizations/organizations.module';
import { ProjectsModule } from '@src/modules/projects/projects.module';
import { TransactionsModule } from '@src/modules/transactions/transactions.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 30,
      limit: 100,
    }),
    OrganizationsModule,
    ProjectsModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

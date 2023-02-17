import { BaseException } from '@src/libs/exceptions/src';

export enum ProjectExceptionName {
  ProjectNotFoundExcepion = 'ProjectNotFoundExcepion',
  ProjectDonationWalletNotFoundException = 'ProjectDonationWalletNotFoundException',
}

export class ProjectNotFoundExcepion extends BaseException {
  constructor() {
    const name = ProjectExceptionName.ProjectNotFoundExcepion;
    const status = 404;
    super(name, status, 'Project not found.');
  }
}

export class ProjectDonationWalletNotFoundException extends BaseException {
  constructor() {
    const name = ProjectExceptionName.ProjectDonationWalletNotFoundException;
    const status = 404;
    super(name, status, 'Project donation wallet not found.');
  }
}

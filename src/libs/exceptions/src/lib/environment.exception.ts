import { BaseException } from '@src/libs/exceptions/src';

export enum EnvironmentExceptionName {
  InvalidEnvironmentException = 'InvalidEnvironmentException',
}
export class InvalidEnvironmentException extends BaseException {
  constructor(env: string) {
    const name = EnvironmentExceptionName.InvalidEnvironmentException;
    const status = 500;
    super(name, status, `"${env}" is not a valid envrionment!`);
  }
}

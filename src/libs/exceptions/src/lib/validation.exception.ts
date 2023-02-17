import { BaseException } from '@src/libs/exceptions/src';

export enum ValidationExceptionName {
  InvalidInputException = 'InvalidInputException',
}
export class InvalidInputException extends BaseException {
  constructor(message: string) {
    const name = ValidationExceptionName.InvalidInputException;
    const status = 400;
    super(name, status, message);
  }
}

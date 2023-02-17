import { ToNumber } from '@src/libs/transformers/src';
import { IsDatabaseIntId } from '@src/libs/validators/src';

export class FindAllByByOwnerIdParamsDto {
  @ToNumber()
  @IsDatabaseIntId()
  ownerId: number;
}

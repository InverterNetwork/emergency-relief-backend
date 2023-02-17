import { ToNumber } from '@src/libs/transformers/src';
import { IsDatabaseIntId } from '@src/libs/validators/src';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class FindAllByProjectIdQueryDto {
  @IsOptional()
  @ToNumber()
  @IsNumber()
  @Min(0)
  skip?: number;

  @IsOptional()
  @ToNumber()
  @IsNumber()
  @Min(0)
  take?: number;
}

export class FindAllByProjectIdParamsDto {
  @ToNumber()
  @IsDatabaseIntId()
  projectId: number;
}

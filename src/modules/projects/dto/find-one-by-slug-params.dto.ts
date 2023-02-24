import { Trim } from '@src/libs/transformers/src';
import { IsString, MinLength } from 'class-validator';

export class FindOneBySlugParamsDto {
  @Trim()
  @IsString()
  @MinLength(1)
  slug: string;
}

import { Trim } from '@src/libs/transformers/src';
import { IsDatabaseIntId } from '@src/libs/validators/src';
import { IsCurrency, IsString, Length } from 'class-validator';

export class CreateTransactionDto {
  @Trim()
  @IsString()
  @Length(1, 256)
  transactionHash: string;

  @Trim()
  @IsString()
  @Length(1, 100)
  fromWallet: string;

  @IsDatabaseIntId()
  toWalletId: number;

  @IsDatabaseIntId()
  projectId: number;

  @Trim()
  @IsString()
  @Length(1, 100)
  token: string;

  @Trim()
  @IsCurrency()
  amount: string;
}

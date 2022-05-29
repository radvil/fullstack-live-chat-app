import { Constants } from '@radvil/shared/data-access';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { UserEntity } from '../../entities';

export class DtoCreateUser implements Partial<UserEntity> {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(3)
  username!: string;

  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsOptional()
  lastName!: string;

  @IsNotEmpty()
  @MinLength(4)
  @Matches(Constants.Regex.PASSWORD_STRENGTH, {
    message:
      'password should contains at least one uppercase, one lowecase, one number, and one special character',
  })
  password!: string;
}

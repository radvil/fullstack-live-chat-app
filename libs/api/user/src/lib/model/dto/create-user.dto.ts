import { REGEX_PATTERN_PASSWORD_STRENGTH } from '@radvil/shared';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { IUser } from '../user.interface';

export class DtoCreateUser implements Partial<IUser> {
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
  @Matches(REGEX_PATTERN_PASSWORD_STRENGTH, {
    message:
      'password should contains at least one uppercase, one lowecase, one number, and one special character',
  })
  password!: string;
}

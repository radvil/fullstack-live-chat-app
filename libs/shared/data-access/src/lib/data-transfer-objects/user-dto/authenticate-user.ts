import { IsEmail, IsNotEmpty,  } from 'class-validator';

export class DtoAuthenticateUser {
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  password!: string;
}

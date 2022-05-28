import { IsEmail, IsNotEmpty,  } from 'class-validator';

export class DtoLogin {
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  password!: string;
}

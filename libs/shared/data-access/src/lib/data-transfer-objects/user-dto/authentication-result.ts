import { IsJWT, IsNotEmpty, IsNumber } from 'class-validator';
import { UserEntity } from '../../entities';

export class DtoAuthenticationResult {
  @IsNotEmpty()
  user?: Partial<UserEntity>;

  @IsNotEmpty()
  @IsJWT()
  accessToken?: string;

  @IsNumber()
  expiresIn?: number;

  constructor(partial: Partial<DtoAuthenticationResult>) {
    Object.assign(this, partial);
  }
}

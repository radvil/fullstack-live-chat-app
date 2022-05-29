import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Constants } from '@radvil/shared/data-access';

@Injectable()
export class AuthJwtGuard extends AuthGuard(Constants.Jwt.TOKEN_TYPE) {}

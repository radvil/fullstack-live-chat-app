import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Constants, IJwtPayload } from '@radvil/shared/data-access';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AuthJwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get(Constants.Jwt.SECRET_KEY),
    });
  }

  async validate(payload: IJwtPayload) {
    return { ...payload.user };
  }
}

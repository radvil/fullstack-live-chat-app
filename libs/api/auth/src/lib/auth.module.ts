import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Constants } from '@radvil/shared/data-access';

import { AuthJwtGuard } from './guard';
import { AuthService } from './service';

@Module({
  providers: [AuthService, AuthJwtGuard],
  exports: [AuthService, AuthJwtGuard],
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get(Constants.Jwt.SECRET_KEY),
        signOptions: { expiresIn: Constants.Jwt.EXPIRES_IN },
      }),
    }),
  ],
})
export class ApiAuthModule {}

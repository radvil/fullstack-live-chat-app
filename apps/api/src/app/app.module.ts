import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResponseModule } from '@radvil/api/response';
import { ApiUserModule } from '@radvil/api/user';

import { envFilePath, getDatabaseConfigModuleFactory, globalConfigValidationSchema } from './app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [envFilePath.development],
      validationSchema: globalConfigValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getDatabaseConfigModuleFactory,
    }),

    ApiResponseModule,
    ApiUserModule,
  ],
})
export class ApiAppModule {}

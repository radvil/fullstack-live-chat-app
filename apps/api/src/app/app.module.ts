import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@radvil/api/auth';
import { ApiResponseModule } from '@radvil/api/response';
import { UserModule } from '@radvil/api/user';
import {
  envFilePath,
  getDatabaseConfigModuleFactory,
  globalConfigValidationSchema,
} from './app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
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

    AuthModule,
    UserModule,
  ],
})
export class AppModule {}

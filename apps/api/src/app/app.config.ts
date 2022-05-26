import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as joi from 'joi';

export const envFilePath = {
  development: 'apps/api/src/environments/.env.development',
};

export const globalConfigValidationSchema = joi.object({
  POSTGRES_HOST: joi.string().required(),
  POSTGRES_PORT: joi.number().required(),
  POSTGRES_USER: joi.string().required(),
  POSTGRES_PASSWORD: joi.string().required(),
  POSTGRES_DB: joi.string().required(),
});

export const getDatabaseConfigModuleFactory = (config: ConfigService) => (<TypeOrmModuleOptions>{
  type: 'postgres',
  autoLoadEntities: true,
  host: config.get('POSTGRES_HOST'),
  port: config.get('POSTGRES_PORT'),
  database: config.get('POSTGRES_DB'),
  username: config.get('POSTGRES_USER'),
  password: config.get('POSTGRES_PASSWORD'),
});

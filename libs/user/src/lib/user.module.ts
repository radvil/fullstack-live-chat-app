import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './controller';
import { UserEntity } from './model';
import { UserService } from './service';

@Module({
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([UserEntity])],
})
export class UserModule {}

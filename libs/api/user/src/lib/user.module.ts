import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiAuthModule } from '@radvil/api/auth';
import { UserEntity } from '@radvil/shared/data-access';

import { UserController } from './controller';
import { UserService } from './service';

@Module({
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([UserEntity]), ApiAuthModule],
})
export class ApiUserModule {}

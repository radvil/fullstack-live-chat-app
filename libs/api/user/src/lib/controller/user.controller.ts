import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiDataUser, DtoGetMany } from '@radvil/shared';
import { UserService } from '../service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(@Query() { offset, limit, order }: DtoGetMany) {
    return await this.userService.getMany({ order, limit, offset });
  }

  @Get(ApiDataUser.ApiParams.UserId)
  findById(@Param() userId: string) {
    return this.userService.findOne({ id: userId });
  }
}

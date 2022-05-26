import { Controller, Get, Param } from '@nestjs/common';
import { ApiDataUser } from '@radvil/shared';
import { UserService } from '../service';

@Controller(ApiDataUser.ApiPath.Main)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.getMany();
  }

  @Get(ApiDataUser.ApiParams.UserId)
  findById(@Param() userId: string) {
    return this.userService.findOne({ id: userId });
  }
}

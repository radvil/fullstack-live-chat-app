import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiDataUser } from '@radvil/shared';
import { UserService } from '../service';

const featureName = 'users';

@Controller(featureName)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(@Query('limit') limit = 10, @Query('page') page = 0) {
    limit = limit > 100 ? 100 : limit;
    return this.userService.getMany({ limit, page, route: `/${featureName}` });
  }

  @Get(ApiDataUser.ApiParams.UserId)
  findById(@Param() userId: string) {
    return this.userService.findOne({ where: { id: userId } });
  }
}

import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AuthJwtGuard } from '@radvil/api/auth';
import { ApiResMessage } from '@radvil/api/response';
import { DtoAuthenticateUser, DtoCreateUser, UserEntity } from '@radvil/shared/data-access';
import { UserService } from '../service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthJwtGuard)
  @Get('')
  findAll(@Query('limit') limit = 10, @Query('page') page = 0) {
    limit = limit > 100 ? 100 : limit;
    return this.userService.getMany({ limit, page, route: '/users' });
  }

  @Get(':userId')
  findById(@Param() userId: string) {
    return this.userService.findOne({ where: { id: userId } });
  }

  @Post('login')
  @ApiResMessage('User logged in successfully')
  login(@Body() dto: DtoAuthenticateUser) {
    return this.userService.authenticate(dto);
  }

  @Post('registration')
  @ApiResMessage('User created successfully')
  async register(@Body() payload: DtoCreateUser): Promise<UserEntity> {
    return await this.userService.createOne(payload);
  }
}

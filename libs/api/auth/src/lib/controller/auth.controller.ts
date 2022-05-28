import { Body, Controller, Post } from '@nestjs/common';
import { ApiResMessage } from '@radvil/api/response';
import { DtoCreateUser, IUser, UserService } from '@radvil/api/user';
import { ApiDataAuth } from '@radvil/shared';
import { DtoLogin } from '../model';

import { AuthService } from '../service';

@Controller(ApiDataAuth.ApiPath.Main)
export class AuthController {
  constructor(private authService: AuthService, private userService: UserService) {}

  @Post(ApiDataAuth.ApiPath.Login)
  @ApiResMessage('User logged in successfully')
  login(@Body() dto: DtoLogin) {
    return this.authService.authenticateUser(dto);
  }

  @Post(ApiDataAuth.ApiPath.Registration)
  @ApiResMessage('User created successfully')
  async register(@Body() payload: DtoCreateUser): Promise<IUser> {
    return await this.userService.createOne(payload);
  }
}

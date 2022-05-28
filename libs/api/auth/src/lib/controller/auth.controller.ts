import { Body, Controller, Post } from '@nestjs/common';
import { ApiResMessage } from '@radvil/api/response';
import { DtoCreateUser, IUser, UserService } from '@radvil/api/user';
import { ApiDataAuth } from '@radvil/shared';

import { AuthService } from '../service';

@Controller(ApiDataAuth.ApiPath.Main)
export class AuthController {
  constructor(private authService: AuthService, private userService: UserService) {}

  @Post(ApiDataAuth.ApiPath.Login)
  @ApiResMessage('User logged in successfully')
  login() {
    return this.authService.authenticateUser();
  }

  @Post(ApiDataAuth.ApiPath.Registration)
  @ApiResMessage('User created successfully')
  async register(@Body() payload: DtoCreateUser): Promise<IUser> {
    return await this.userService.createOne(payload);
  }
}

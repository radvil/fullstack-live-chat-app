import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity, UserService } from '@radvil/api/user';
import { compare } from 'bcrypt';
import { DtoLogin } from '../model';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async authenticateUser(dto: DtoLogin): Promise<UserEntity> {
    const { email, password } = dto;
    const foundUser = await this.userService.findOne({
      where: { email },
      select: ['id', 'username', 'email', 'password'],
    });

    if (!foundUser || !(await this.validatePassword(password, foundUser.password))) {
      throw new UnauthorizedException('Invalid email or password!');
    }

    return foundUser;
  }

  private async validatePassword(plainPassword: string, hashedPassword: string) {
    return await compare(plainPassword, hashedPassword);
  }
}

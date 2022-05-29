import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from '@radvil/shared/data-access';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async comparePassword(plainPassword: string, hashedPassword: string) {
    return await compare(plainPassword, hashedPassword);
  }

  async generateJwtToken(partial: Partial<IJwtPayload>): Promise<string> {
    return await this.jwtService.signAsync({ ...partial });
  }
}

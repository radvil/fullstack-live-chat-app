import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '@radvil/api/auth';
import { Constants, DtoAuthenticateUser, DtoAuthenticationResult, DtoCreateUser, UserEntity } from '@radvil/shared/data-access';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly authService: AuthService
  ) {}

  async authenticate(dto: DtoAuthenticateUser): Promise<DtoAuthenticationResult> {
    const { email, password } = dto;
    const foundUser = await this.findOne({
      where: { email },
      select: ['id', 'username', 'email', 'password'],
    });

    const errorMessage = 'Invalid email or password!';

    if (!foundUser) {
      throw new UnauthorizedException(errorMessage);
    }

    const { password: hashedPassword, ...payload } = foundUser;
    const isValidPassword = await this.authService.comparePassword(password, hashedPassword);

    if (!isValidPassword) {
      throw new UnauthorizedException(errorMessage);
    }

    const token = await this.authService.generateJwtToken({ user: payload });

    return new DtoAuthenticationResult({ user: payload, accessToken: token, expiresIn: Constants.Jwt.EXPIRES_IN });
  }

  async getMany(options: IPaginationOptions) {
    try {
      return await paginate(this.userRepo, options);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(options: FindOneOptions<UserEntity>): Promise<UserEntity | null> {
    try {
      return await this.userRepo.findOne(options);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async createOne(dto: DtoCreateUser): Promise<UserEntity> {
    const { email, username } = dto;

    const alreadyExists = (await this.checkExistence({ email })) || (await this.checkExistence({ username }));

    if (alreadyExists) {
      throw new ConflictException('Username or email already exists');
    }

    try {
      const newUser = new UserEntity(dto);
      await this.userRepo.save(newUser);
      return newUser;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async checkExistence(partial: FindOptionsWhere<UserEntity>): Promise<boolean> {
    try {
      return Boolean(await this.userRepo.findOneBy(partial));
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}

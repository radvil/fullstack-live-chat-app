import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { FindOneOptions, Repository } from 'typeorm';
import { DtoCreateUser, IUser, UserEntity } from '../model';

@Injectable()
export class UserService {
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

  async createOne(dto: DtoCreateUser): Promise<IUser> {
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

  async checkExistence(partial: Partial<IUser>): Promise<boolean> {
    try {
      return Boolean(await this.userRepo.findOneBy(partial));
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) {}
}

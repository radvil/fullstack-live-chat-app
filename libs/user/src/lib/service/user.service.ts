import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DtoCreateUser, IUser, UserEntity } from '../model';

@Injectable()
export class UserService {
  async getMany() {
    return await this.userRepo.findAndCount({ cache: true });
  }

  async findOne(fields: Partial<IUser>): Promise<IUser | null> {
    return await this.userRepo.findOneBy(fields);
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
    return Boolean(await this.findOne(partial));
  }

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) {}
}

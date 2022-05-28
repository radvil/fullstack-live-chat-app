import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DtoGetMany, IPaginationResult, IPaginationResultMeta } from '@radvil/shared';
import { FindManyOptions, Repository } from 'typeorm';
import { DtoCreateUser, IUser, UserEntity } from '../model';

@Injectable()
export class UserService {
  async getMany(dto: DtoGetMany<UserEntity>) {
    try {
      return await paginate(this.userRepo, {
        take: dto.limit,
        skip: dto.offset,
        order: dto.order,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
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

type IPaginationOption<T> = Partial<FindManyOptions<T> & { showMeta: boolean }>;

async function paginate<T>(repository: Repository<T>, options: IPaginationOption<T>): Promise<IPaginationResult<T>> {
  const [items, totalItems] = await repository.findAndCount(options || {});

  let result: IPaginationResult<T> = { items };

  const includeMetadata = options.showMeta ?? true;

  if (includeMetadata) {
    const { take, skip } = options;
    const count = items.length;
    const meta = createPaginationResultMeta({ take, skip, count, totalItems });

    result = { meta, ...result };
  }

  return result;
}

function createPaginationResultMeta(o: {
  count: number;
  totalItems: number;
  take: number | undefined;
  skip: number | undefined;
}): IPaginationResultMeta {
  const limit = o?.take || 0;
  const offset = o?.skip || 0;

  const totalPages = limit ? Math.ceil(o.totalItems / limit) : 1;
  const currentPage = offset ? Math.ceil(offset / (limit + 1)) + 1 : 1;

  return {
    totalItems: o.totalItems,
    itemsCount: o.count,
    itemsPerPage: limit || null,
    totalPages,
    currentPage,
  };
}

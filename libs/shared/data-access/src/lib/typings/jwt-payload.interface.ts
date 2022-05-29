import { UserEntity } from "../entities/user.entity";

export type IJwtPayload = {
  user: Pick<UserEntity, 'id' | 'email' | 'username'>;
};

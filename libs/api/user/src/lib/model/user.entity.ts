import { hash as bcryptHash } from 'bcrypt';
import { Exclude, Expose } from 'class-transformer';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DtoCreateUser } from './dto/create-user.dto';
import { IUser } from './user.interface';

@Entity({ name: 'users', orderBy: { createdTimestamp: 'DESC' } })
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  firstName!: string;

  @Column({ nullable: true })
  lastName!: string;

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Exclude()
  @Column({ select: false })
  password!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdTimestamp!: string;

  @Column({ type: 'timestamp', nullable: true, select: false })
  updatedTimestamp!: string;

  @Column({ type: 'timestamp', nullable: true, select: false })
  passwordUpdatedTimestamp!: string;

  @BeforeInsert()
  @BeforeUpdate()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcryptHash(this.password, 10);
  }

  constructor(partial: DtoCreateUser) {
    Object.assign(this, partial);
  }
}

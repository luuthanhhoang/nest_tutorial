import { Exclude } from 'class-transformer';

export class UserDto {
  username: string;
  @Exclude()
  password: string;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}

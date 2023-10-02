import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { User } from 'src/types/users';
import { UserDto } from 'src/users/dtos/users.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'htl',
      password: 'htl',
    },
    {
      username: 'bxl',
      password: 'bxl',
    },
    {
      username: 'pat',
      password: 'pat',
    },
  ];

  getUsers(): User[] {
    return this.users.map((user) => plainToInstance(UserDto, user));
  }

  getUserByUsername(username: string): User {
    return this.users.find((u) => u.username === username);
  }
}

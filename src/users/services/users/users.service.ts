import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { User } from 'src/types/users';
import { UserDto } from 'src/users/dtos/users.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'htl',
      password: 'htl',
    },
    {
      id: 2,
      username: 'bxl',
      password: 'bxl',
    },
    {
      id: 3,
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

  getUserById(id: number): User {
    return this.users.find((u) => u.id === id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm';
import { User } from 'src/types/users';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UserDto } from 'src/users/dtos/users.dto';
import { Repository } from 'typeorm';

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

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  getUsers(): User[] {
    return this.users.map((user) => plainToInstance(UserDto, user));
  }

  getUserByUsername(username: string): User {
    return this.users.find((u) => u.username === username);
  }

  getUserById(id: number): User {
    return this.users.find((u) => u.id === id);
  }

  createUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
}

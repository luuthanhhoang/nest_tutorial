import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm';
import { User } from 'src/types/users';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UserDto } from 'src/users/dtos/users.dto';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private users: User[] = [];

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

  findUserByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  getUserById(id: number): User {
    return this.users.find((u) => u.id === id);
  }

  createUser(user: CreateUserDto) {
    const password = encodePassword(user.password);
    const newUser = this.userRepository.create({ ...user, password });
    return this.userRepository.save(newUser);
  }
}

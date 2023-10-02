import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { User } from 'src/types/users';
import { UserDto } from 'src/users/dtos/users.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersService: UsersService,
  ) {}

  @Get('')
  getUsers(): User[] {
    return this.usersService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getUserByUsername(@Param('username') username: string): User {
    const user = this.usersService.getUserByUsername(username);
    if (user) return new UserDto(user);
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }
}
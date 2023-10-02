import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(message?: string, statusCode?: number) {
    super(message ?? 'User not found', statusCode || HttpStatus.BAD_REQUEST);
  }
}

import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('First middleware');
    const { authorization } = req.headers;

    if (!authorization)
      res.status(403).send('No authentication token provided');

    if (authorization === '123') {
      next();
    } else {
      res.status(403).send('Invalid authorization token provided');
    }
  }
}

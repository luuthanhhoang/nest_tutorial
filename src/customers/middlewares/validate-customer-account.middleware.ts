import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Second middleware');
    const { valid } = req.headers;

    if (valid) {
      next();
    } else {
      res.status(400).send('Errorrrrrr!');
    }
  }
}

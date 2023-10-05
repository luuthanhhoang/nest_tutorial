import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';

async function bootstrap() {
  //abortOnError: show console when have error and not stop program
  const app = await NestFactory.create(AppModule, { abortOnError: true });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.use(
    session({
      secret: 'AEAEEZEJLSJDPDKSsdldlk23233232',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  await app.listen(8000);
}
bootstrap();

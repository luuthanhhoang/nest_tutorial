import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customer/services/customers/customers.service';

@Module({
  controllers: [AppController],
  providers: [AppService, CustomersService],
  imports: [CustomersModule],
})
export class AppModule {}

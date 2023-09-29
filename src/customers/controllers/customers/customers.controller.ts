import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get(':id')
  getCustomerById(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ): any {
    const customerById = this.customersService.getCustomerById(id);
    if (customerById) {
      res.send(customerById);
    } else {
      res.status(400).send({ msg: 'Customer not found' });
    }
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customerById = this.customersService.getCustomerById(id);
    if (customerById) {
      return customerById;
    } else
      throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
  }

  @Get('')
  getAllCustomer() {
    return this.customersService.getAllCustomer();
  }

  @Post('')
  createCustomer(@Body() customer: CreateCustomerDto) {
    return this.customersService.createCustomer(customer);
  }
}

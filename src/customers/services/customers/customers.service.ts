import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/types/customer';

@Injectable()
export class CustomersService {
  users: Customer[] = [
    {
      id: 1,
      name: 'Hoang Thanh Luu',
      email: 'htl@gmail.com',
    },
    {
      id: 2,
      name: 'Phan Anh Tuan',
      email: 'pat@gmail.com',
    },
    {
      id: 3,
      name: 'Bui Xuan Long',
      email: 'bxl@gmail.com',
    },
  ];

  getAllCustomer(): Customer[] {
    return this.users;
  }

  getCustomerById(id: number): Customer {
    return this.users.find((u) => u.id === id);
  }

  createCustomer(customer: CreateCustomerDto) {
    return this.users.push(customer);
  }
}

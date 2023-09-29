import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      name: 'Hoang Thanh Luu',
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'Phan Anh Tuan',
      createdAt: new Date(),
    },
    {
      id: 3,
      name: 'Bui Xuan Long',
      createdAt: new Date(),
    },
  ];

  getAllCustomers(id: number): any {
    return this.users.find((u) => u.id === id);
  }
}

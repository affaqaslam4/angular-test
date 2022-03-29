import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  companies: User[] = [
    {
      name: 'User 1',
      id: 1,
    },
    {
      name: 'User 2',
      id: 2,
    },
  ];

  getEmployeeIds = (): Promise<number[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.companies.map((x) => x.id)), 1000);
    });
  };

  getEmployeeById = (id: number): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.companies.filter((x) => x.id === id)[0]);
      }, 1000);
    });
  };

  getEmployeesData = (): Promise<User[]> => {
    return new Promise<User[]>((res) => {});
  };
}

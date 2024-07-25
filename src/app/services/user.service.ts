import { Injectable, inject } from '@angular/core';
import { User } from '../core/models/user.model';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: '',
    },
  ];

  addUser(user: User) {
    if (!user.firstName || !user.lastName || !user.email) {
      throw new Error('Please fill in all fields');
    }
    if (this.users.length === 5) {
      throw new Error('You can only add 5 users');
    }
    this.users.push(user);
  }

  getAllUsers() {
    return [...this.users];
  }
}

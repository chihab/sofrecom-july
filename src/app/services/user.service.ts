import { Injectable, inject } from '@angular/core';
import { User } from '../core/models/user.model';
import { LogService } from './log.service';

/*
 * { className: UserService, instance: null }
 * component1 asks to inject UserService
 * { className: UserService, instance: new UserService() }
 * component2 asks to inject UserService
 * { className: UserService, instance:  }
 */

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  logService = inject(LogService);

  constructor() {
    this.users = [];
  }

  getCount() {
    return this.users.length;
  }

  getUsers() {
    return this.users;
  }
}

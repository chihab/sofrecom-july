import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users');
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/users', user);
  }

  //   getUser() {
  //     this.httpClient.get('http://localhost:3000/users/1')
  //   }
}

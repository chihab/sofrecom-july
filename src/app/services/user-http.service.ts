import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap, map, Observable, delay } from 'rxjs';
import { User } from '../core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>('http://localhost:3000/users')
      .pipe(map((users) => users.filter((user) => user.firstName != 'dsfsdf')));
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/users', user);
  }

  getUsersCount(): Observable<number> {
    return this.getUsers().pipe(
      delay(5000),
      map((users) => users.length)
    );
  }
  //   getUser() {
  //     this.httpClient.get('http://localhost:3000/users/1')
  //   }
}

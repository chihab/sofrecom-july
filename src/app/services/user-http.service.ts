import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap, map, Observable, delay } from 'rxjs';
import { User } from '../core/models/user.model';
import { AuthService } from '../core/services/auth.service';

const USER_API_URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);
  authService = inject(AuthService);

  getUsers(): Observable<User[]> {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`,
    };
    return this.httpClient
      .get<User[]>(USER_API_URL, { headers })
      .pipe(map((users) => users.filter((user) => user.firstName != 'dsfsdf')));
  }

  addUser(user: User): Observable<User> {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`,
    };
    return this.httpClient.post<User>(USER_API_URL, user, { headers });
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

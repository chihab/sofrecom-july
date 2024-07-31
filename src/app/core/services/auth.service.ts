import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(user: string, password: string) {
    if (user === 'admin' && password === 'admin') {
      localStorage.setItem('token', '123456');
    } else {
      throw new Error('Invalid credentials');
    }
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}

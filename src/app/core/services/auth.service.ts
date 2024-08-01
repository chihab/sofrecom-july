import { Injectable } from '@angular/core';

export interface AuthenticatedUser {
  name: string;
  email: string;
  roles: string[]; // 'ADMIN' | 'USER'
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: AuthenticatedUser | null = null;
  login(user: string, password: string) {
    if (user === 'admin' && password === 'admin') {
      localStorage.setItem('token', '123456');
    } else {
      throw new Error('Invalid credentials');
    }
  }

  hasRole(role: string) {
    return this.user?.roles.includes(role);
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

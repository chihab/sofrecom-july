import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  isError = false;

  onLogin(user: string, password: string) {
    try {
      this.authService.login(user, password);
      this.router.navigate(['/']);
    } catch (error) {
      this.isError = true;
    }
  }
}

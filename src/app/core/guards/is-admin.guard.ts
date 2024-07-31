import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // const authService = inject(AuthService);
  // if (!authService.hasAdminRole()) {
  //   router.navigate(['/']);
  //   return false;
  // }
  return true;
};

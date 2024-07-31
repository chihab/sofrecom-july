import { ResolveFn } from '@angular/router';
import { UserService } from '../../services/user-http.service';
import { inject } from '@angular/core';

export const getUsersCountResolver: ResolveFn<number> = (route, state) => {
  const userService = inject(UserService);
  return userService.getUsersCount();
};

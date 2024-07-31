import { Routes } from '@angular/router';
import { Workshop08Component } from './workshops/workshop08/workshop08.component';
import { Workshop10Component } from './workshops/workshop10/workshop10.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { inject } from '@angular/core';
import { UserService } from './services/user-http.service';
import { getUsersCountResolver } from './core/resolvers/get-users-count.resolver';
import { LoginComponent } from './pages/login/login.component';
import { isAuthenticatedGuard } from './core/guards/is-authenticated.guard';

function hasAdminRole() {
  return true;
}

function hasActiveSubscription() {
  return true;
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: Workshop08Component,
    canActivate: [isAuthenticatedGuard],
  },
  {
    path: 'dashboard',
    component: Workshop10Component,
    resolve: {
      usersCount: getUsersCountResolver,
    },
    canActivate: [isAuthenticatedGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

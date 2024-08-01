import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './core/guards/is-authenticated.guard';
import { getUsersCountResolver } from './core/resolvers/get-users-count.resolver';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Workshop10Component } from './workshops/workshop10/workshop10.component';
import { Workshop14Component } from './workshops/workshop14/workshop14.component';

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
    component: Workshop14Component,
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

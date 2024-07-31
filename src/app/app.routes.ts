import { Routes } from '@angular/router';
import { Workshop08Component } from './workshops/workshop08/workshop08.component';
import { Workshop10Component } from './workshops/workshop10/workshop10.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { inject } from '@angular/core';
import { UserService } from './services/user-http.service';
import { getUsersCountResolver } from './core/resolvers/get-users-count.resolver';

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
    path: 'admin',
    component: Workshop08Component,
    canActivate: [hasAdminRole, hasActiveSubscription],
  },
  {
    path: 'dashboard',
    component: Workshop10Component,
    resolve: {
      usersCount: getUsersCountResolver,
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

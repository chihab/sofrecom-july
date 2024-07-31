import { Routes } from '@angular/router';
import { Workshop08Component } from './workshops/workshop08/workshop08.component';
import { Workshop09Component } from './workshops/workshop09/workshop09.component';
import { UsersComponent } from './experiments/router/users/users.component';

export const routes: Routes = [
  {
    path: 'users/:id',
    component: UsersComponent,
  },
  {
    path: 'workshop08',
    component: Workshop08Component,
  },
  {
    path: 'workshop09',
    component: Workshop09Component,
  },
];

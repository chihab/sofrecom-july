import { Routes } from '@angular/router';
import { Workshop08Component } from './workshops/workshop08/workshop08.component';
import { Workshop10Component } from './workshops/workshop10/workshop10.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: Workshop08Component,
  },
  {
    path: 'dashboard',
    component: Workshop10Component,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

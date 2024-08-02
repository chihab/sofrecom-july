import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/admin',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    loadChildren: () =>
      import('./pages/home/home.routes').then((m) => m.homeRoutes),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

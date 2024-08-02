import { isAuthenticatedGuard } from '../../core/guards/is-authenticated.guard';
import { getUsersCountResolver } from '../../core/resolvers/get-users-count.resolver';
import { Workshop10Component } from '../../workshops/workshop10/workshop10.component';
import { Workshop14Component } from '../../workshops/workshop14/workshop14.component';

export const homeRoutes = [
  {
    path: 'admin',
    component: Workshop14Component,
    // loadComponent: () =>
    //   import('./workshops/workshop14/workshop14.component').then(
    //     (m) => m.Workshop14Component
    //   ),

    // loadComponent = download ./workshop14.component.js, load it and return the component
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
];

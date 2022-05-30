import { Routes } from '@angular/router';

export const webCoreRoutes: Routes = [
  {
    path: 'authentication',
    loadChildren: async () => (await import('@radvil/web/auth')).AuthRoutingModule,
  },
  {
    path: '',
    loadChildren: async () => (await import('@radvil/web/pages')).PagesModule,
  },
];

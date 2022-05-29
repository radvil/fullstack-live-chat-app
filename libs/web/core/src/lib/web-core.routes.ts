import { Routes } from '@angular/router';
import { PagesComponent } from '@radvil/web/pages';

export const webCoreRoutes: Routes = [
  {
    path: 'authentication',
    loadChildren: async () => (await import('@radvil/web/auth')).AuthRoutingModule,
  },
  {
    path: '',
    component: PagesComponent,
    children: [],
  },
];

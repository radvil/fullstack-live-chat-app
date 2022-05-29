import { Routes } from '@angular/router';
import { LayoutContainerComponent } from '@radvil/web/layout/container';

export const webCoreRoutes: Routes = [
  {
    path: '',
    component: LayoutContainerComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: async () => (await import('@radvil/web/auth')).AuthRoutingModule,
      },
      {
        path: '',
        loadChildren: async () => (await import('@radvil/web/layout/main-view')).MainViewRoutingModule,
      },
    ],
  },
];

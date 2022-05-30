import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: 'chat-room',
        loadChildren: async () => (await import('@radvil/web/chat-room/feature/chat-room-shell')).ChatRoomShellRoutingModule,
      },
      {
        path: '',
        redirectTo: 'chat-room',
        pathMatch: 'full',
      },
    ]
  }
]

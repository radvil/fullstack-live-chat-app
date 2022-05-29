import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ChatRoomShellComponent, ChatRoomShellModule } from '@radvil/web/chat-room/feature/chat-room-shell';
import { MainViewComponent } from './main-view.component';
import { MainViewModule } from './main-view.module';

export const mainViewRoutes: Route[] = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'chat-room',
        component: ChatRoomShellComponent,
        data: { title: 'Chat Room' },
      },
      {
        path: '',
        redirectTo: 'chat-room',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [MainViewModule, ChatRoomShellModule, RouterModule.forChild(mainViewRoutes)],
})
export class MainViewRoutingModule {}

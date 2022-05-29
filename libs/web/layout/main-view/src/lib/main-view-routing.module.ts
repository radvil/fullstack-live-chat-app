import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view.component';
import { MainViewModule } from './main-view.module';
import { ChatRoomComponent, ChatRoomModule } from "@radvil/web/chat-room";

export const mainViewRoutes: Route[] = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'chat-room',
        component: ChatRoomComponent,
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
  imports: [MainViewModule, ChatRoomModule, RouterModule.forChild(mainViewRoutes)],
})
export class MainViewRoutingModule {}

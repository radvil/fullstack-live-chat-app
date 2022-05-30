import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChatRoomShellModule } from './chat-room-shell.module';
import { ChatRoomShellComponent } from './chat-room-shell.component';

@NgModule({
  imports: [
    ChatRoomShellModule,
    RouterModule.forChild([
      {
        path: "",
        component: ChatRoomShellComponent,
        data: { title: "Chat Room" }
      }
    ])
  ],
})
export class ChatRoomShellRoutingModule { }

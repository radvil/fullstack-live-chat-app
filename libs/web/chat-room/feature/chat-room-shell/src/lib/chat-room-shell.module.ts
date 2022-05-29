import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatRoomShellComponent } from './chat-room-shell.component';

@NgModule({
  declarations: [ChatRoomShellComponent],
  exports: [ChatRoomShellComponent],
  imports: [CommonModule, RouterModule],
})
export class ChatRoomShellModule {}

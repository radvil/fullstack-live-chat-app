import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChatRoomShellComponent } from './chat-room-shell.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ChatRoomShellComponent],
  exports: [ChatRoomShellComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
})
export class ChatRoomShellModule {}

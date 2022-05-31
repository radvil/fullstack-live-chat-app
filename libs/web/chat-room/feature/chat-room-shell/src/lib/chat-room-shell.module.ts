import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChatRoomShellComponent } from './chat-room-shell.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ChatRoomShellComponent],
  exports: [ChatRoomShellComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
})
export class ChatRoomShellModule {}

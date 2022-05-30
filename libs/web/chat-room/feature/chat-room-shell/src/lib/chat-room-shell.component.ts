import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'web-chat-room-shell',
  templateUrl: './chat-room-shell.component.html',
  styleUrls: ['./chat-room-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatRoomShellComponent {
}

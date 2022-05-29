import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'web-shell-sidebar',
  styleUrls: ['sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="sidebar">
      <div class="menu-list">
        <div class="menu-list-item-header">
          <button mat-icon-button (click)="sidebarService.toggle()">
            <mat-icon style="cursor: pointer;">menu</mat-icon>
          </button>
          <span class="app-name-label"><span style="color: red;">🔥 Live</span> Chat</span>
        </div>

        <a
          mat-ripple
          *ngFor="let menu of sidebarService.menuItems$ | ngrxPush"
          [routerLink]="menu.routerLink"
          routerLinkActive="active"
          class="menu-list-item"
        >
          <button mat-icon-button [disableRipple]="true">
            <mat-icon>{{ menu.icon }}</mat-icon>
          </button>
          <span class="menu-label">{{ menu.label }}</span>
        </a>
      </div>

      <div *ngIf="true" mat-ripple class="user-menu">
        <img class="user-avatar" src="assets/images/portrait.jpg" alt="avatar" />

        <div class="meta">
          <span class="username-text">username</span>
          <span class="fullname-text">User Full Name</span>
        </div>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  constructor(public readonly sidebarService: SidebarService) {}
}

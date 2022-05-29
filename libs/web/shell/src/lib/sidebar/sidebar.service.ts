import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';

export interface ISideMenuItem {
  routerLink: string;
  label: string;
  icon?: string;
}

interface ISidebarState {
  isExpanded: boolean;
  menuItems: ISideMenuItem[];
}

const initialState: ISidebarState = {
  isExpanded: true,
  menuItems: [
    {
      routerLink: '/home',
      label: 'Home',
      icon: 'home',
    },
    {
      routerLink: '/search',
      label: 'Search',
      icon: 'search',
    },
    {
      routerLink: '/post/add',
      label: 'Add Post',
      icon: 'add',
    },
    {
      routerLink: '/chat-room',
      label: 'Chat Room',
      icon: 'message',
    },
    {
      routerLink: '/notifications',
      label: 'Notifications',
      icon: 'alarm',
    },
  ],
};

@Injectable()
export class SidebarService {
  private _state = new BehaviorSubject<ISidebarState>(initialState);

  public readonly state$ = this._state.asObservable().pipe(distinctUntilChanged());
  public readonly isExpanded$ = this.state$.pipe(map((state) => state.isExpanded)).pipe(distinctUntilChanged());
  public readonly menuItems$ = this.state$.pipe(map((state) => state.menuItems)).pipe(distinctUntilChanged());

  toggle(value?: boolean): void {
    const isExpanded = value ?? !this._state.value.isExpanded;

    const newState: ISidebarState = {
      ...this._state.value,
      isExpanded,
    };

    this._state.next(newState);
  }
}

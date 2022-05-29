import { Component } from '@angular/core';

@Component({
  selector: 'web-layout-container',
  styleUrls: ['layout-container.component.scss'],
  template: `
    <h1>Layout Container works!</h1>
    <router-outlet></router-outlet>
  `
})

export class LayoutContainerComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'web-main-view',
  template: `
    <p>If user authed will redirected here...</p>
    <router-outlet></router-outlet>
  `,
})

export class MainViewComponent {}
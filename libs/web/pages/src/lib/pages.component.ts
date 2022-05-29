import { Component } from '@angular/core';

@Component({
  selector: 'web-pages',
  styleUrls: ['./pages.component.scss'],
  template: `
    <web-shell-single-column [expand]="false">
      <router-outlet></router-outlet>
    </web-shell-single-column>
  `,
})
export class PagesComponent {}

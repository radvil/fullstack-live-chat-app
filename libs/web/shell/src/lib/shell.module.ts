import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SingleColumnShellComponent } from './layout/single-column/single-column.component';
import { ShellWrapperComponent } from './wrapper/wrapper.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar/sidebar.service';
import { ReactiveComponentModule } from '@ngrx/component';
import { MatRippleModule } from '@angular/material/core';

export const COMPONENTS = [ShellWrapperComponent, SidebarComponent, SingleColumnShellComponent];

@NgModule({
  providers: [SidebarService],
  declarations: [...COMPONENTS],
  exports: [COMPONENTS],
  imports: [CommonModule, RouterModule, ReactiveComponentModule, MatButtonModule, MatIconModule, MatRippleModule],
})
export class WebShellModule {
  static forRoot(): ModuleWithProviders<WebShellModule> {
    return {
      ngModule: WebShellModule,
      providers: [SidebarService],
    };
  }
}

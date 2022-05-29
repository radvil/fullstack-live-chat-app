import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { WebShellModule } from '@radvil/web/shell';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PagesComponent],
  exports: [PagesComponent],
  imports: [CommonModule, RouterModule, WebShellModule],
})
export class PagesModule {}

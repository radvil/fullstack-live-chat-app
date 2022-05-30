import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { WebShellModule } from '@radvil/web/shell';
import { RouterModule } from '@angular/router';
import { pagesRoutes } from './pages.routes';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, RouterModule.forChild(pagesRoutes), WebShellModule],
})
export class PagesModule {}

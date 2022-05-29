import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainViewComponent],
  exports: [MainViewComponent],
  imports: [CommonModule, RouterModule],
})
export class MainViewModule {}

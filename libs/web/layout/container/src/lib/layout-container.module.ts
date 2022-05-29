import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutContainerComponent } from './layout-container.component';

@NgModule({
  declarations: [LayoutContainerComponent],
  exports: [LayoutContainerComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutContainerModule {}

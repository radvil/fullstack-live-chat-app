import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './feature/login/login.component';
import { RegistrationComponent } from './feature/registration/registration.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  exports: [LoginComponent, RegistrationComponent],
  imports: [CommonModule, RouterModule],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AuthModule } from './auth.module';
import { LoginComponent } from './feature/login/login.component';

export const authRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'registration',
    component: LoginComponent,
    data: { title: 'Registration' },
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [AuthModule, RouterModule.forChild(authRoutes)],
})
export class AuthRoutingModule {}

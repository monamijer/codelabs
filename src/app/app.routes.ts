import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Register } from './register/register';

export const routes: Routes = [
  {path: 'admin', component: Admin},
  {path: 'register', component: Register}
];

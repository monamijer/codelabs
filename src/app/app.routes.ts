import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Register } from './register/register';
import { Editblog } from './component/editblog/editblog';

export const routes: Routes = [
  {path: 'admin', component: Admin},
  {path: 'register', component: Register},
  {path: 'blog', component: Editblog}
];

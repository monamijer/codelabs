import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Register } from './register/register';
import { Editblog } from './component/editblog/editblog';
import { EditPackingList } from './edit-packing-list/edit-packing-list';

export const routes: Routes = [
  {path: 'admin', component: Admin},
  {path: 'register', component: Register},
  {path: 'blog', component: Editblog},
  {path: 'packlist', component: EditPackingList}
];

import { Routes } from '@angular/router';
import { Admin } from './admin';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin').then((m) => m.Admin),
  },
];

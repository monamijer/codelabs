import { Routes } from '@angular/router';
import { Register } from './register';

export const registerRoutes: Routes = [
  {
    path: 'register',
    loadComponent: () => import('./register').then((m) => m.Register),
  },
];

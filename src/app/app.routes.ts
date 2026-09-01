import { Routes } from '@angular/router';
import { BackofficeShellComponent } from './layouts/backoffice-shell/backoffice-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: BackofficeShellComponent,
    children: [
      { path: 'dashboard', title: 'Tableau de bord | MADA AGROTRACK', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'exploitations', title: 'Exploitations | MADA AGROTRACK', loadComponent: () => import('./features/exploitations/exploitations.component').then(m => m.ExploitationsComponent) },
      { path: 'parcelles', title: 'Parcelles | MADA AGROTRACK', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { page: 'parcelles' } },
      { path: 'cultures', title: 'Cultures | MADA AGROTRACK', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { page: 'cultures' } },
      { path: 'productions', title: 'Productions | MADA AGROTRACK', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { page: 'productions' } },
      { path: 'stocks', title: 'Stocks | MADA AGROTRACK', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { page: 'stocks' } },
      { path: 'transports', title: 'Transports | MADA AGROTRACK', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { page: 'transports' } },
      { path: 'rapports', title: 'Rapports | MADA AGROTRACK', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { page: 'rapports' } },
      { path: 'incidents', title: 'Incidents | MADA AGROTRACK', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { page: 'incidents' } },
      { path: 'parametres', title: 'Paramètres | MADA AGROTRACK', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { page: 'parametres' } },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

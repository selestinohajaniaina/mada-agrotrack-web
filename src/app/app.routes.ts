import { Routes } from '@angular/router';
import { BackofficeShellComponent } from './layouts/backoffice-shell/backoffice-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: BackofficeShellComponent,
    children: [
      { path: 'dashboard', title: 'Tableau de bord | MADA AGROTRACK', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'beneficiaires', title: 'Bénéficiaires | MADA AGROTRACK', loadComponent: () => import('./features/exploitations/exploitations.component').then(m => m.ExploitationsComponent) },
      { path: 'exploitations', redirectTo: 'beneficiaires', pathMatch: 'full' },
      { path: 'parcelles', redirectTo: 'carte-sites', pathMatch: 'full' },
      ...['carte-sites', 'cycles', 'besoins', 'financements', 'contributions', 'achats', 'stocks', 'distribution', 'equipements', 'visites', 'missions-audit', 'anomalies', 'validation-dossiers', 'passeport', 'programmes', 'bailleurs', 'rapports', 'utilisateurs-permissions', 'parametres', 'elevage', 'animaux-lots', 'sante-animale', 'vaccination', 'alimentation', 'aquaculture', 'qualite-eau', 'recoltes-aquacoles'].map(path => ({
        path,
        title: `${path} | MADA AGROTRACK`,
        loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent),
        data: { page: path }
      })),
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

import { Routes } from '@angular/router';
import { demoAuthGuard, demoGuestGuard } from './core/guards/demo-auth.guard';
import { BackofficeShellComponent } from './layouts/backoffice-shell/backoffice-shell.component';

export const routes: Routes = [
  { path: 'login', canActivate: [demoGuestGuard], title: 'Connexion démo | MADA AGROTRACK', loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent) },
  { path: '', component: BackofficeShellComponent, canActivate: [demoAuthGuard], children: [
    { path: 'dashboard', title: 'Tableau de bord | MADA AGROTRACK', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
    { path: 'cultivateurs', title: 'Cultivateurs | MADA AGROTRACK', loadComponent: () => import('./features/cultivators/cultivator-list.component').then(m => m.CultivatorListComponent) },
    { path: 'cultivateurs/individuels', title: 'Cultivateurs individuels | MADA AGROTRACK', loadComponent: () => import('./features/cultivators/cultivator-list.component').then(m => m.CultivatorListComponent), data: { type: 'INDIVIDUAL' } },
    { path: 'cultivateurs/associations', title: 'Associations | MADA AGROTRACK', loadComponent: () => import('./features/cultivators/cultivator-list.component').then(m => m.CultivatorListComponent), data: { type: 'ORGANIZATION' } },
    { path: 'cultivateurs/:id/modifier', title: 'Modifier un cultivateur | MADA AGROTRACK', loadComponent: () => import('./features/cultivators/cultivator-edit.component').then(m => m.CultivatorEditComponent) },
    { path: 'cultivateurs/:id', title: 'Fiche cultivateur | MADA AGROTRACK', loadComponent: () => import('./features/cultivators/cultivator-detail.component').then(m => m.CultivatorDetailComponent) },
    { path: 'comptes/nouveau', title: 'Nouveau compte | MADA AGROTRACK', loadComponent: () => import('./features/users/user-form.component').then(m => m.UserFormComponent) },
    { path: 'comptes/:id/modifier', title: 'Modifier un compte | MADA AGROTRACK', loadComponent: () => import('./features/users/user-form.component').then(m => m.UserFormComponent) },
    { path: 'comptes/:id', title: 'Compte utilisateur | MADA AGROTRACK', loadComponent: () => import('./features/users/user-detail.component').then(m => m.UserDetailComponent) },
    { path: 'comptes', title: 'Comptes utilisateurs | MADA AGROTRACK', loadComponent: () => import('./features/users/user-list.component').then(m => m.UserListComponent) },
    { path: 'profil', title: 'Mon profil | MADA AGROTRACK', loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent) },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
  ]},
  { path: '**', redirectTo: 'dashboard' }
];

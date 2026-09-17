import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

import { MockSessionService } from '../../core/services/mock-session.service';
interface NavItem { label: string; route: string; icon: string; userManagement?: boolean; }
interface NavSection { label: string; items: NavItem[]; }

@Component({
  selector: 'app-backoffice-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, IonIcon],
  templateUrl: './backoffice-shell.component.html'
})
export class BackofficeShellComponent {
  readonly session = inject(MockSessionService); private readonly router = inject(Router);
  sidebarOpen = false;
  sidebarCollapsed = false;
  profileOpen = false;

  readonly navSections: NavSection[] = [
    { label: 'Gestion', items: [
      { label: 'Tableau de bord', route: '/dashboard', icon: 'grid-outline' },
      { label: 'Tous les cultivateurs', route: '/cultivateurs', icon: 'people-outline' },
      { label: 'Individuels', route: '/cultivateurs/individuels', icon: 'person-outline' },
      { label: 'Associations', route: '/cultivateurs/associations', icon: 'business-outline' }
    ]},
    { label: 'Administration', items: [
      { label: 'Comptes utilisateurs', route: '/comptes', icon: 'key-outline', userManagement: true },
      { label: 'Mon profil', route: '/profil', icon: 'person-circle-outline' }
    ]}
  ];

  closeMobileSidebar(): void { this.sidebarOpen = false; }
  toggleSidebar(): void { this.sidebarCollapsed = !this.sidebarCollapsed; }
  async logout(): Promise<void> { this.session.logout(); await this.router.navigateByUrl('/login'); }

  @HostListener('document:keydown.escape')
  closeOverlays(): void { this.sidebarOpen = false; this.profileOpen = false; }
}

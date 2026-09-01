import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

interface NavItem { label: string; route: string; icon: string; }

@Component({
  selector: 'app-backoffice-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, IonIcon],
  templateUrl: './backoffice-shell.component.html'
})
export class BackofficeShellComponent {
  sidebarOpen = false;
  sidebarCollapsed = false;
  profileOpen = false;

  readonly primaryNav: NavItem[] = [
    { label: 'Tableau de bord', route: '/dashboard', icon: 'grid-outline' },
    { label: 'Exploitations', route: '/exploitations', icon: 'business-outline' },
    { label: 'Parcelles', route: '/parcelles', icon: 'map-outline' },
    { label: 'Cultures', route: '/cultures', icon: 'leaf-outline' },
    { label: 'Productions', route: '/productions', icon: 'analytics-outline' },
    { label: 'Stocks', route: '/stocks', icon: 'cube-outline' },
    { label: 'Transports', route: '/transports', icon: 'car-outline' },
    { label: 'Incidents', route: '/incidents', icon: 'warning-outline' },
    { label: 'Rapports', route: '/rapports', icon: 'document-text-outline' }
  ];

  closeMobileSidebar(): void { this.sidebarOpen = false; }
  toggleSidebar(): void { this.sidebarCollapsed = !this.sidebarCollapsed; }

  @HostListener('document:keydown.escape')
  closeOverlays(): void { this.sidebarOpen = false; this.profileOpen = false; }
}

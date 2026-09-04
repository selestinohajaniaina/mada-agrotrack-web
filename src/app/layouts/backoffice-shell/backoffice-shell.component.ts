import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

interface NavItem { label: string; route: string; icon: string; future?: boolean; }
interface NavSection { label: string; items: NavItem[]; }

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

  readonly navSections: NavSection[] = [
    { label: 'Pilotage', items: [
      { label: 'Tableau de bord', route: '/dashboard', icon: 'grid-outline' },
      { label: 'Bénéficiaires', route: '/beneficiaires', icon: 'people-outline' },
      { label: 'Carte / Sites GPS', route: '/carte-sites', icon: 'map-outline' },
      { label: 'Campagnes / Cycles', route: '/cycles', icon: 'leaf-outline' },
      { label: 'Passeport exploitation', route: '/passeport', icon: 'id-card-outline' }
    ]},
    { label: 'Appuis & opérations', items: [
      { label: 'Besoins', route: '/besoins', icon: 'clipboard-outline' },
      { label: 'Appuis / Financements', route: '/financements', icon: 'cash-outline' },
      { label: 'Contributions', route: '/contributions', icon: 'wallet-outline' },
      { label: 'Achats', route: '/achats', icon: 'cart-outline' },
      { label: 'Stocks', route: '/stocks', icon: 'cube-outline' },
      { label: 'Distribution', route: '/distribution', icon: 'gift-outline' },
      { label: 'Équipements', route: '/equipements', icon: 'construct-outline' }
    ]},
    { label: 'Terrain & contrôle', items: [
      { label: 'Visites terrain', route: '/visites', icon: 'navigate-outline' },
      { label: 'Missions d’audit', route: '/missions-audit', icon: 'shield-checkmark-outline' },
      { label: 'Alertes / Anomalies', route: '/anomalies', icon: 'warning-outline' },
      { label: 'Validation dossiers', route: '/validation-dossiers', icon: 'checkmark-done-outline' }
    ]},
    { label: 'Administration', items: [
      { label: 'Programmes', route: '/programmes', icon: 'layers-outline' },
      { label: 'Bailleurs', route: '/bailleurs', icon: 'business-outline' },
      { label: 'Rapports', route: '/rapports', icon: 'document-text-outline' },
      { label: 'Utilisateurs & droits', route: '/utilisateurs-permissions', icon: 'key-outline' }
    ]},
    { label: 'Extensions préparées', items: [
      { label: 'Élevage', route: '/elevage', icon: 'paw-outline', future: true },
      { label: 'Animaux / Lots', route: '/animaux-lots', icon: 'pricetags-outline', future: true },
      { label: 'Santé animale', route: '/sante-animale', icon: 'medkit-outline', future: true },
      { label: 'Vaccination', route: '/vaccination', icon: 'medical-outline', future: true },
      { label: 'Alimentation', route: '/alimentation', icon: 'nutrition-outline', future: true },
      { label: 'Aquaculture', route: '/aquaculture', icon: 'water-outline', future: true },
      { label: 'Qualité de l’eau', route: '/qualite-eau', icon: 'analytics-outline', future: true },
      { label: 'Récoltes aquacoles', route: '/recoltes-aquacoles', icon: 'fish-outline', future: true }
    ]}
  ];

  closeMobileSidebar(): void { this.sidebarOpen = false; }
  toggleSidebar(): void { this.sidebarCollapsed = !this.sidebarCollapsed; }

  @HostListener('document:keydown.escape')
  closeOverlays(): void { this.sidebarOpen = false; this.profileOpen = false; }
}

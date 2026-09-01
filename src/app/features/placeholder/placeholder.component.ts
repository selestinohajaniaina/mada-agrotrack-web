import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

interface PageConfig { title: string; description: string; icon: string; metric: string; metricLabel: string; }

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [IonIcon, PageHeaderComponent],
  templateUrl: './placeholder.component.html'
})
export class PlaceholderComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly configs: Record<string, PageConfig> = {
    parcelles: { title: 'Parcelles', description: 'Cartographie et suivi des sites de production agricole.', icon: 'map-outline', metric: '1 436', metricLabel: 'parcelles enregistrées' },
    cultures: { title: 'Cultures', description: 'Référentiel des cultures et suivi des campagnes en cours.', icon: 'leaf-outline', metric: '18', metricLabel: 'cultures actives' },
    productions: { title: 'Productions', description: 'Suivi des prévisions, récoltes et rendements agricoles.', icon: 'analytics-outline', metric: '3 842 t', metricLabel: 'produites cette campagne' },
    stocks: { title: 'Stocks', description: 'Traçabilité des produits, lots, entrées et distributions.', icon: 'cube-outline', metric: '18 560', metricLabel: 'unités disponibles' },
    transports: { title: 'Transports', description: 'Pilotage des acheminements et livraisons sur le terrain.', icon: 'car-outline', metric: '24', metricLabel: 'transports en cours' },
    rapports: { title: 'Rapports', description: 'Indicateurs, analyses et exports consolidés des programmes.', icon: 'document-text-outline', metric: '32', metricLabel: 'rapports disponibles' },
    incidents: { title: 'Incidents', description: 'Centralisation, qualification et résolution des incidents.', icon: 'warning-outline', metric: '7', metricLabel: 'incidents ouverts' },
    parametres: { title: 'Paramètres', description: 'Configuration locale du prototype et des référentiels.', icon: 'settings-outline', metric: '10', metricLabel: 'modules configurables' }
  };
  readonly config = this.configs[this.route.snapshot.data['page'] as string];
}

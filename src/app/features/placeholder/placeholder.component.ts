import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

interface ModuleRecord { title: string; detail: string; status: string; tone: 'ok' | 'warn' | 'info'; }
interface PageConfig {
  title: string;
  description: string;
  icon: string;
  metric: string;
  metricLabel: string;
  priority: 'P0' | 'P1' | 'P2' | 'P3' | 'Extension';
  state: 'Prototype' | 'Préparé';
  capabilities: string[];
  records: ModuleRecord[];
}

const page = (title: string, description: string, icon: string, metric: string, metricLabel: string, priority: PageConfig['priority'], capabilities: string[], records: ModuleRecord[] = [], state: PageConfig['state'] = 'Prototype'): PageConfig => ({ title, description, icon, metric, metricLabel, priority, state, capabilities, records });

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [IonIcon, PageHeaderComponent],
  templateUrl: './placeholder.component.html'
})
export class PlaceholderComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly configs: Record<string, PageConfig> = {
    'carte-sites': page('Carte / Sites GPS', 'Recherche cartographique, superficies distinctes et préparation des missions.', 'map-outline', '14', 'sites de démonstration', 'P0', ['Import GPX, KML ou CSV avec aperçu', 'Point, polygone et précision du relevé', 'Superficies déclarée, source GPS et calculée', 'Domicile sensible séparé du site'], [
      { title: 'SITE-TEST-014 · Riz', detail: 'Déclarée 2,40 ha · GPS 2,31 ha · calculée 2,29 ha', status: 'Polygone vérifié', tone: 'ok' },
      { title: 'SITE-TEST-009 · Maraîchage', detail: 'Point GPS · source GNSS TEST-02 · précision 1,8 m', status: 'Contour requis', tone: 'warn' },
      { title: 'Mission terrain TEST-018', detail: '4 sites préchargés · coordonnées disponibles hors connexion', status: 'Prête', tone: 'info' }
    ]),
    cycles: page('Campagnes / Cycles', 'Cycles agricoles reliés aux sites, programmes et résultats.', 'leaf-outline', '8', 'cycles actifs', 'P1', ['Campagne et activité', 'Prévision et production réelle', 'Historique multi-campagne', 'Dossier agronomique intégré']),
    besoins: page('Besoins', 'Demande initiale et validation technique conservées séparément.', 'clipboard-outline', '23', 'besoins à examiner', 'P1', ['Diagnostic technique', 'Quantité demandée vs validée', 'Éligibilité configurable', 'Justification de la décision']),
    financements: page('Appuis / Financements', 'Mécanismes configurables et isolés par programme et bailleur.', 'cash-outline', '4', 'mécanismes de test', 'P1', ['Subvention et contribution', 'Fonds revolving', 'Crédit et apport complémentaire', 'Sources et lignes budgétaires séparées']),
    contributions: page('Contributions / Remboursements', 'Suivi des parts attendues, reçues et restantes.', 'wallet-outline', '72 %', 'contributions reçues', 'P1', ['Espèces, mobile money et virement', 'Contribution en nature autorisée', 'Valorisation documentée', 'Historique non destructif']),
    achats: page('Achats', 'Commandes, factures, fournisseurs et sources de financement.', 'cart-outline', '12', 'achats de démonstration', 'P1', ['Fournisseur commun', 'Programme et bailleur obligatoires', 'Réception et pièces', 'Prévision distincte de la commande']),
    stocks: page('Stocks', 'Lots, dépôts, réservations, mouvements et inventaires.', 'cube-outline', '18 560', 'unités fictives disponibles', 'P1', ['Stock comptable séparé par programme', 'Traçabilité directe et inverse', 'Expiration, blocage et rappel', 'Inventaires et écarts justifiés']),
    distribution: page('Distribution', 'Preuves numériques de remise reliées au cycle et au lot.', 'gift-outline', '37', 'bons de remise fictifs', 'P1', ['Scan ID MADA / QR', 'Produit, lot, quantité et valeur', 'Agent, date/heure et GPS', 'Signature/code, photo et numéro unique'], [
      { title: 'BR-TEST-2026-0037', detail: 'Lot NPK-TEST-084 · MADA-BEN-0002 · SITE-TEST-014', status: 'Confirmé', tone: 'ok' },
      { title: 'BR-TEST-2026-0038', detail: 'Semence RIZ-TEST-12 · preuve photo en attente de sync', status: 'À synchroniser', tone: 'warn' }
    ]),
    equipements: page('Équipements', 'Passeport, affectation, maintenance et contrôle terrain.', 'construct-outline', '46', 'équipements suivis', 'P1', ['ID et QR', 'Financeur, propriétaire, gardien, utilisateur', 'Planning collectif', 'Maintenance, panne et historique']),
    visites: page('Visites terrain', 'Missions et preuves de présence géographique contrôlées.', 'navigate-outline', '18', 'visites planifiées', 'P1', ['Mission et périmètre', 'Horodatage et GPS', 'Distance indicative au site', 'Observations, photos, résultat et audit'], [
      { title: 'VIS-TEST-021', detail: 'SITE-TEST-014 · distance indicative 38 m · précision 3 m', status: 'Conforme', tone: 'ok' },
      { title: 'VIS-TEST-022', detail: 'SITE-TEST-009 · photo en file hors connexion', status: 'À vérifier', tone: 'warn' }
    ]),
    'missions-audit': page('Missions d’audit', 'Accès temporaires et échantillons indépendants sous contrôle.', 'shield-checkmark-outline', '3', 'missions fictives actives', 'P2', ['Périmètre dossiers/sites', 'Expiration automatique', 'Échantillonnage et stratification', 'Consultations et exports journalisés'], [
      { title: 'AUD-TEST-004 · BAILLEUR TEST C', detail: 'Programme C1 · 12 sites · expire le 12/09/2026', status: 'Accès temporaire', tone: 'info' },
      { title: 'Échantillon TEST-07', detail: 'Stratifié par District et culture · liste validée', status: 'Liste verrouillée', tone: 'ok' }
    ]),
    anomalies: page('Alertes / Anomalies', 'Signaux de cohérence soumis à décision humaine.', 'warning-outline', '7', 'cas à vérifier', 'P2', ['Doublons CIN/téléphone/noms', 'Chevauchement de polygones', 'Double appui potentiel', 'Décision motivée et historisée'], [
      { title: 'ANO-TEST-031 · Chevauchement', detail: 'Recouvrement supérieur au seuil du PROGRAMME TEST', status: 'Vérification humaine', tone: 'warn' },
      { title: 'ANO-TEST-028 · Téléphone partagé', detail: 'Numéro présent sur deux dossiers fictifs', status: 'Justifié', tone: 'ok' }
    ]),
    'validation-dossiers': page('Validation des dossiers', 'Workflow et checklist configurables par programme.', 'checkmark-done-outline', '11', 'dossiers à vérifier', 'P2', ['8 étapes configurables', 'Checklist identité, GPS et cycle', 'Contribution et pièces', 'Séparation des validations'], [
      { title: 'MADA-BEN-0003', detail: 'À vérifier · 8/11 critères · anomalie GPS ouverte', status: 'Action requise', tone: 'warn' },
      { title: 'MADA-BEN-0002', detail: 'Complet · 11/11 critères · prêt pour validation', status: 'Complet', tone: 'ok' }
    ]),
    passeport: page('Passeport exploitation', 'Historique multi-campagne et multi-activité d’un bénéficiaire unique.', 'id-card-outline', '3', 'activités sur un dossier test', 'P3', ['Sites et superficies', 'Cycles, intrants et équipements', 'Financements, visites et audits', 'Résultats, anomalies et corrections'], [
      { title: 'MADA-BEN-0005 · Exploitation mixte TEST', detail: '2 parcelles agricoles · 1 élevage préparé · 1 étang préparé', status: 'Profil unique', tone: 'ok' },
      { title: 'Historique 2025–2026', detail: 'Appuis, visites, production et actions correctives', status: '2 campagnes', tone: 'info' }
    ]),
    programmes: page('Programmes', 'Budgets, zones, règles et responsables configurables.', 'layers-outline', '5', 'programmes fictifs', 'P0', ['Multi-bailleurs', 'Sources distinctes', 'Règles versionnées', 'Vue consolidée MADA']),
    bailleurs: page('Bailleurs', 'Périmètres stricts et lecture seule par défaut.', 'business-outline', '4', 'bailleurs de recette', 'P0', ['Isolation obligatoire', 'Programmes multiples', 'Accès temporaires d’audit', 'Cinquième bailleur par configuration']),
    rapports: page('Rapports', 'Exports autorisés, indicateurs sourcés et comparaisons.', 'document-text-outline', '32', 'rapports de démonstration', 'P3', ['CSV/XLSX et PDF', 'GPX/KML selon droits', 'Objectif vs réalisé', 'Déclaré vs mesuré vs vérifié']),
    'utilisateurs-permissions': page('Utilisateurs / Rôles / Permissions', 'Accès par rôle, périmètre, durée et sensibilité.', 'key-outline', '10', 'rôles préparés', 'P0', ['Permissions côté serveur', 'Programmes et zones', 'Séparation des tâches', 'Révocation immédiate']),
    parametres: page('Paramètres / Référentiels', 'Règles versionnées sans valeurs métier codées en dur.', 'settings-outline', '14', 'familles configurables', 'P0', ['Sources et dates de vérification', 'Seuils par programme', 'Protocoles par activité', 'Historique des versions']),
    elevage: page('Élevage', 'Architecture MADA LIVESTOCK TRACE préparée, non implémentée.', 'paw-outline', '8', 'profils de filière prévus', 'Extension', ['Site et unité de production', 'Individu, lot ou mode mixte', 'Mouvements et reproduction', 'Production et traçabilité'], [], 'Préparé'),
    'animaux-lots': page('Animaux / Lots', 'Identification et population futures sans duplication du bénéficiaire.', 'pricetags-outline', '2', 'modes d’identification', 'Extension', ['ID MADA et ID officiel distincts', 'Individu ↔ lot ↔ site', 'Naissance, transfert, vente, mortalité', 'Traçabilité ascendante/descendante'], [], 'Préparé'),
    'sante-animale': page('Santé animale', 'Dossier sanitaire configurable sous responsabilité habilitée.', 'medkit-outline', '0', 'donnée réelle connectée', 'Extension', ['Symptômes et niveau de preuve', 'Laboratoire et résultats', 'Traitements et retraits', 'Biosécurité et quarantaine'], [], 'Préparé'),
    vaccination: page('Vaccination', 'Calendriers versionnés par espèce, zone et protocole.', 'medical-outline', '0', 'protocole activé', 'Extension', ['Vaccin et lot', 'Prévu vs réalisé', 'Effectif ciblé vs traité', 'Alertes configurables'], [], 'Préparé'),
    alimentation: page('Alimentation', 'Aliments, lots, rations validées et stocks futurs.', 'nutrition-outline', '0', 'lot connecté', 'Extension', ['Source et formulation', 'Lot et péremption', 'Distribution animal/unité', 'Conversion seulement si données fiables'], [], 'Préparé'),
    aquaculture: page('Aquaculture', 'Architecture MADA AQUA TRACE préparée, non implémentée.', 'water-outline', '4', 'types d’unité prévus', 'Extension', ['Ferme, étang, bassin et cage', 'Cycle et lot de juvéniles', 'Alimentation, santé et mortalité', 'Récolte et lot commercial'], [], 'Préparé'),
    'qualite-eau': page('Qualité de l’eau', 'Mesures et seuils configurables, sans prescription automatique.', 'analytics-outline', '7', 'paramètres possibles', 'Extension', ['Température, pH et oxygène', 'Salinité et turbidité', 'Ammoniac et nitrite', 'Source, unité et protocole versionnés'], [], 'Préparé'),
    'recoltes-aquacoles': page('Récoltes aquacoles', 'Traçabilité future du cycle au lot commercial.', 'fish-outline', '0', 'récolte réelle connectée', 'Extension', ['Cycle et unité source', 'Quantité et poids', 'Destination et preuve', 'Rappel ascendant/descendant'], [], 'Préparé')
  };
  readonly config = this.configs[this.route.snapshot.data['page'] as string] ?? page('Module', 'Espace de démonstration.', 'apps-outline', '—', 'éléments', 'P3', []);

  toneClasses(tone: ModuleRecord['tone']): string {
    return { ok: 'bg-emerald-50 text-emerald-700', warn: 'bg-amber-50 text-amber-800', info: 'bg-sky-50 text-sky-700' }[tone];
  }
}

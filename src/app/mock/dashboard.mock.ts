import { DashboardStat, ProductionPoint, RecentActivity } from '../core/models/dashboard.model';

export const DASHBOARD_STATS: DashboardStat[] = [
  { label: 'Bénéficiaires actifs', value: '248', change: '+12 ce mois', trend: 'up', icon: 'people-outline', tone: 'emerald' },
  { label: 'Sites GPS vérifiés', value: '1 436', change: '81 % polygonés', trend: 'up', icon: 'map-outline', tone: 'lime' },
  { label: 'Dossiers complets', value: '184', change: '74 % du total', trend: 'up', icon: 'checkmark-done-outline', tone: 'amber' },
  { label: 'Stock disponible', value: '18 560', change: '92 % conforme', trend: 'stable', icon: 'cube-outline', tone: 'sky' },
  { label: 'Visites planifiées', value: '24', change: '6 aujourd’hui', trend: 'stable', icon: 'navigate-outline', tone: 'violet' },
  { label: 'Anomalies à vérifier', value: '7', change: '-3 cette semaine', trend: 'down', icon: 'warning-outline', tone: 'rose' }
];

export const PRODUCTION_POINTS: ProductionPoint[] = [
  { month: 'Avr', value: 55 }, { month: 'Mai', value: 68 }, { month: 'Juin', value: 62 },
  { month: 'Juil', value: 82 }, { month: 'Août', value: 74 }, { month: 'Sept', value: 92 }
];

export const RECENT_ACTIVITIES: RecentActivity[] = [
  { id: 1, title: 'Récolte enregistrée', description: 'Ferme Vakinankaratra · 18,4 t de riz', time: 'Il y a 18 min', type: 'production' },
  { id: 2, title: 'Réception de stock', description: 'Lot NPK-2026-084 · 240 sacs réceptionnés', time: 'Il y a 42 min', type: 'stock' },
  { id: 3, title: 'Mission terrain préparée', description: 'MISSION-TEST-018 · 4 sites préchargés', time: 'Il y a 1 h', type: 'transport' },
  { id: 4, title: 'Anomalie à vérifier', description: 'Chevauchement GPS potentiel · aucune conclusion automatique', time: 'Il y a 2 h', type: 'incident' },
  { id: 5, title: 'Production validée', description: 'Coopérative Alaotra · Campagne 2026', time: 'Il y a 3 h', type: 'production' }
];

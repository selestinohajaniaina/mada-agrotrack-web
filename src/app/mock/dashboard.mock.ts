import { DashboardStat, ProductionPoint, RecentActivity } from '../core/models/dashboard.model';

export const DASHBOARD_STATS: DashboardStat[] = [
  { label: 'Exploitations', value: '248', change: '+12 ce mois', trend: 'up', icon: 'business-outline', tone: 'emerald' },
  { label: 'Parcelles', value: '1 436', change: '+4,8 %', trend: 'up', icon: 'map-outline', tone: 'lime' },
  { label: 'Production', value: '3 842 t', change: '+8,2 %', trend: 'up', icon: 'leaf-outline', tone: 'amber' },
  { label: 'Stock disponible', value: '18 560', change: '92 % conforme', trend: 'stable', icon: 'cube-outline', tone: 'sky' },
  { label: 'Transports en cours', value: '24', change: '6 arrivent aujourd’hui', trend: 'stable', icon: 'car-outline', tone: 'violet' },
  { label: 'Incidents ouverts', value: '7', change: '-3 cette semaine', trend: 'down', icon: 'warning-outline', tone: 'rose' }
];

export const PRODUCTION_POINTS: ProductionPoint[] = [
  { month: 'Avr', value: 55 }, { month: 'Mai', value: 68 }, { month: 'Juin', value: 62 },
  { month: 'Juil', value: 82 }, { month: 'Août', value: 74 }, { month: 'Sept', value: 92 }
];

export const RECENT_ACTIVITIES: RecentActivity[] = [
  { id: 1, title: 'Récolte enregistrée', description: 'Ferme Vakinankaratra · 18,4 t de riz', time: 'Il y a 18 min', type: 'production' },
  { id: 2, title: 'Réception de stock', description: 'Lot NPK-2026-084 · 240 sacs réceptionnés', time: 'Il y a 42 min', type: 'stock' },
  { id: 3, title: 'Transport démarré', description: 'TR-0284 vers Ambatondrazaka', time: 'Il y a 1 h', type: 'transport' },
  { id: 4, title: 'Incident signalé', description: 'Irrigation défaillante · Priorité moyenne', time: 'Il y a 2 h', type: 'incident' },
  { id: 5, title: 'Production validée', description: 'Coopérative Alaotra · Campagne 2026', time: 'Il y a 3 h', type: 'production' }
];

export interface DashboardStat { label: string; value: string; change: string; trend: 'up' | 'down' | 'stable'; icon: string; tone: string; }
export interface RecentActivity { id: number; title: string; description: string; time: string; type: 'production' | 'stock' | 'incident' | 'transport'; }
export interface ProductionPoint { month: string; value: number; }

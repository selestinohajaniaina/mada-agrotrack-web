import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardStat, ProductionPoint, RecentActivity } from '../models/dashboard.model';
import { Exploitation } from '../models/exploitation.model';
import { DASHBOARD_STATS, PRODUCTION_POINTS, RECENT_ACTIVITIES } from '../../mock/dashboard.mock';
import { EXPLOITATIONS_MOCK } from '../../mock/exploitations.mock';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  getDashboardStats(): Observable<DashboardStat[]> { return of(DASHBOARD_STATS); }
  getProductionPoints(): Observable<ProductionPoint[]> { return of(PRODUCTION_POINTS); }
  getRecentActivities(): Observable<RecentActivity[]> { return of(RECENT_ACTIVITIES); }
  getExploitations(): Observable<Exploitation[]> { return of(EXPLOITATIONS_MOCK); }
}

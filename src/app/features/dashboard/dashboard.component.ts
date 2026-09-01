import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { MockDataService } from '../../core/services/mock-data.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe, IonIcon, PageHeaderComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  private readonly data = inject(MockDataService);
  readonly stats$ = this.data.getDashboardStats();
  readonly production$ = this.data.getProductionPoints();
  readonly activities$ = this.data.getRecentActivities();

  toneClasses(tone: string): string {
    return ({ emerald: 'bg-emerald-50 text-emerald-700', lime: 'bg-lime-50 text-lime-700', amber: 'bg-amber-50 text-amber-700', sky: 'bg-sky-50 text-sky-700', violet: 'bg-violet-50 text-violet-700', rose: 'bg-rose-50 text-rose-700' } as Record<string, string>)[tone] ?? 'bg-slate-50 text-slate-700';
  }

  activityClasses(type: string): string {
    return ({ production: 'bg-emerald-100 text-emerald-700', stock: 'bg-sky-100 text-sky-700', transport: 'bg-violet-100 text-violet-700', incident: 'bg-rose-100 text-rose-700' } as Record<string, string>)[type];
  }
}

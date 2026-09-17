import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { Cultivator, cultivatorName } from '../../core/models/cultivator.model';
import { CultivatorStoreService } from '../../core/services/cultivator-store.service';
import { MockSessionService } from '../../core/services/mock-session.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';
@Component({ selector: 'app-cultivator-detail', standalone: true, imports: [RouterLink, IonIcon, StatusBadgeComponent], templateUrl: './cultivator-detail.component.html' })
export class CultivatorDetailComponent {
  readonly store = inject(CultivatorStoreService); readonly session = inject(MockSessionService); private readonly router = inject(Router); readonly item = signal<Cultivator | undefined>(this.store.get(inject(ActivatedRoute).snapshot.paramMap.get('id') ?? '')); readonly revealCin = signal(false); readonly name = cultivatorName;
  async archive(): Promise<void> { const item = this.item(); if (!item || !confirm(`Archiver la fiche « ${this.name(item)} » ?`)) return; this.store.setStatus(item.id, 'ARCHIVED'); this.item.set(this.store.get(item.id)); }
  async back(): Promise<void> { await this.router.navigateByUrl('/cultivateurs'); }
}

import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { CultivatorStatus, CultivatorType, cultivatorLocation, cultivatorName, cultivatorPhone } from '../../core/models/cultivator.model';
import { CultivatorStoreService } from '../../core/services/cultivator-store.service';
import { MockSessionService } from '../../core/services/mock-session.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';
@Component({ selector: 'app-cultivator-list', standalone: true, imports: [FormsModule, RouterLink, IonIcon, PageHeaderComponent, StatusBadgeComponent], templateUrl: './cultivator-list.component.html' })
export class CultivatorListComponent {
  readonly store = inject(CultivatorStoreService); readonly session = inject(MockSessionService); private readonly route = inject(ActivatedRoute);
  readonly fixedType = this.route.snapshot.data['type'] as CultivatorType | undefined; readonly search = signal(''); readonly type = signal<CultivatorType | 'ALL'>(this.fixedType ?? 'ALL'); readonly status = signal<CultivatorStatus | 'ALL'>('ALL'); readonly region = signal('ALL'); readonly page = signal(1); readonly pageSize = 7;
  readonly name = cultivatorName; readonly phone = cultivatorPhone; readonly location = cultivatorLocation;
  readonly regions = computed(() => [...new Set(this.store.items().map(item => item.region))].sort());
  readonly filtered = computed(() => { const q = this.search().trim().toLocaleLowerCase('fr'); return this.store.items().filter(item => this.type() === 'ALL' || item.type === this.type()).filter(item => this.status() === 'ALL' || item.status === this.status()).filter(item => this.region() === 'ALL' || item.region === this.region()).filter(item => !q || `${this.name(item)} ${this.phone(item)} ${this.location(item)} ${item.code}`.toLocaleLowerCase('fr').includes(q)); });
  readonly paged = computed(() => this.filtered().slice((this.page() - 1) * this.pageSize, this.page() * this.pageSize)); readonly pages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)));
  title(): string { return this.fixedType === 'INDIVIDUAL' ? 'Cultivateurs individuels' : this.fixedType === 'ORGANIZATION' ? 'Associations agricoles' : 'Tous les cultivateurs'; }
  resetPage(): void { this.page.set(1); }
  previousPage(): void { this.page.update(value => Math.max(1, value - 1)); }
  nextPage(): void { this.page.update(value => Math.min(this.pages(), value + 1)); }
}

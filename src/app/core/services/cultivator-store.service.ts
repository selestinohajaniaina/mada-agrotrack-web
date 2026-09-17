import { computed, Injectable, signal } from '@angular/core';
import { Cultivator, CultivatorStatus, cultivatorName } from '../models/cultivator.model';
import { CULTIVATORS_MOCK } from '../../mock/cultivators.mock';

@Injectable({ providedIn: 'root' })
export class CultivatorStoreService {
  readonly items = signal<Cultivator[]>(structuredClone(CULTIVATORS_MOCK));
  readonly notice = signal('');
  readonly total = computed(() => this.items().length);
  readonly individualCount = computed(() => this.items().filter(item => item.type === 'INDIVIDUAL').length);
  readonly organizationCount = computed(() => this.items().filter(item => item.type === 'ORGANIZATION').length);
  readonly activeCount = computed(() => this.items().filter(item => item.status === 'ACTIVE').length);
  readonly archivedCount = computed(() => this.items().filter(item => item.status === 'ARCHIVED').length);
  readonly recent = computed(() => [...this.items()].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 5));
  get(id: string): Cultivator | undefined { return this.items().find(item => item.id === id); }
  update(record: Cultivator): void { this.items.update(items => items.map(item => item.id === record.id ? { ...record, updatedAt: new Date().toISOString().slice(0, 10) } : item)); this.flash(`Fiche « ${cultivatorName(record)} » mise à jour dans le prototype`); }
  setStatus(id: string, status: CultivatorStatus): void { const record = this.get(id); if (record) this.update({ ...record, status }); }
  flash(message: string): void { this.notice.set(message); window.setTimeout(() => this.notice.set(''), 3000); }
}

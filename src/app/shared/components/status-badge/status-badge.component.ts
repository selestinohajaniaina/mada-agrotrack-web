import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  template: `<span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" [class]="classes()"><span class="h-1.5 w-1.5 rounded-full bg-current"></span>{{ label() }}</span>`
})
export class StatusBadgeComponent {
  readonly status = input.required<string>();
  readonly label = computed(() => ({ active: 'Active', en_pause: 'En pause', inactive: 'Inactive' }[this.status()] ?? this.status()));
  readonly classes = computed(() => ({
    active: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200',
    en_pause: 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200',
    inactive: 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200'
  }[this.status()] ?? 'bg-slate-100 text-slate-600'));
}

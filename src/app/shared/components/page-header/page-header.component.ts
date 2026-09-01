import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  template: `
    <div class="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <p class="mb-1 text-xs font-bold uppercase tracking-[.16em] text-emerald-700">{{ eyebrow() }}</p>
        <h1 class="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{{ title() }}</h1>
        <p class="mt-1.5 max-w-3xl text-sm text-slate-500 sm:text-base">{{ description() }}</p>
      </div>
      <ng-content />
    </div>
  `
})
export class PageHeaderComponent {
  readonly eyebrow = input('MADA AGROTRACK');
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}

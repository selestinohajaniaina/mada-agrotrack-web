import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { Cultivator } from '../../core/models/cultivator.model';
import { CultivatorStoreService } from '../../core/services/cultivator-store.service';
import { MockSessionService } from '../../core/services/mock-session.service';
@Component({ selector: 'app-cultivator-edit', standalone: true, imports: [FormsModule, RouterLink, IonIcon], templateUrl: './cultivator-edit.component.html' })
export class CultivatorEditComponent {
  readonly trim = (value: string): string => value.trim();
  private readonly store = inject(CultivatorStoreService); private readonly router = inject(Router); readonly session = inject(MockSessionService); readonly errors = signal<string[]>([]);
  record?: Cultivator = (() => { const found = this.store.get(inject(ActivatedRoute).snapshot.paramMap.get('id') ?? ''); return found ? structuredClone(found) : undefined; })();
  async save(): Promise<void> { if (!this.record) return; const errors: string[] = []; if (this.record.type === 'INDIVIDUAL') { if (!this.record.identity.lastName.trim()) errors.push('Le nom est obligatoire.'); if (!this.record.identity.firstName.trim()) errors.push('Le prénom est obligatoire.'); if (!this.validPhone(this.record.contact.primaryPhone)) errors.push('Le téléphone principal est invalide.'); } else { if (!this.record.organization.officialName.trim()) errors.push('Le nom officiel est obligatoire.'); if (!this.validPhone(this.record.contact.primaryPhone)) errors.push('Le téléphone principal est invalide.'); if (!this.record.representative.lastName.trim() || !this.record.representative.firstName.trim()) errors.push('Le responsable doit être renseigné.'); } this.errors.set(errors); if (errors.length) return; this.store.update(this.record); await this.router.navigate(['/cultivateurs', this.record.id]); }
  private validPhone(value: string): boolean { const count = value.replace(/\D/g, '').length; return count >= 8 && count <= 15; }
}

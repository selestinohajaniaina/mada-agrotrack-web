import { computed, Injectable, signal } from '@angular/core';
import { UserRole, roleLabels } from '../models/user-account.model';

export interface DemoSession { firstName: string; lastName: string; email: string; role: UserRole; }
@Injectable({ providedIn: 'root' })
export class MockSessionService {
  private readonly defaultSession: DemoSession = { firstName: 'Hery', lastName: 'Rakoto Démo', email: 'hery.admin@example.test', role: 'SUPER_ADMIN' };
  readonly current = signal<DemoSession | null>(this.read());
  readonly roleLabel = computed(() => this.current() ? roleLabels[this.current()!.role] : '');
  readonly isAuthenticated = computed(() => Boolean(this.current()));
  login(role: UserRole): void { const session = { ...this.defaultSession, role }; sessionStorage.setItem('mada-demo-session', JSON.stringify(session)); this.current.set(session); }
  logout(): void { sessionStorage.removeItem('mada-demo-session'); this.current.set(null); }
  canManageUsers(): boolean { return ['SUPER_ADMIN', 'ADMIN'].includes(this.current()?.role ?? ''); }
  canManageAdmins(): boolean { return this.current()?.role === 'SUPER_ADMIN'; }
  canEditCultivators(): boolean { return ['SUPER_ADMIN', 'ADMIN'].includes(this.current()?.role ?? ''); }
  private read(): DemoSession | null { try { const raw = sessionStorage.getItem('mada-demo-session'); return raw ? JSON.parse(raw) as DemoSession : null; } catch { return null; } }
}

import { Injectable, signal } from '@angular/core';
import { UserAccount } from '../models/user-account.model';
import { USERS_MOCK } from '../../mock/users.mock';

@Injectable({ providedIn: 'root' })
export class UserStoreService {
  readonly users = signal<UserAccount[]>(structuredClone(USERS_MOCK)); readonly notice = signal('');
  get(id: string): UserAccount | undefined { return this.users().find(user => user.id === id); }
  save(user: UserAccount): void { const exists = this.get(user.id); this.users.update(items => exists ? items.map(item => item.id === user.id ? user : item) : [user, ...items]); this.flash(exists ? 'Compte modifié dans le prototype' : 'Compte de démonstration créé'); }
  toggle(id: string): void { const user = this.get(id); if (user) this.save({ ...user, status: user.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE' }); }
  flash(message: string): void { this.notice.set(message); window.setTimeout(() => this.notice.set(''), 3000); }
}

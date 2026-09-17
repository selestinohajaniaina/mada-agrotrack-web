import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { UserRole, UserStatus, roleLabels } from '../../core/models/user-account.model';
import { MockSessionService } from '../../core/services/mock-session.service';
import { UserStoreService } from '../../core/services/user-store.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';
@Component({ selector: 'app-user-list', standalone: true, imports: [FormsModule, RouterLink, IonIcon, PageHeaderComponent, StatusBadgeComponent], templateUrl: './user-list.component.html' })
export class UserListComponent { readonly store = inject(UserStoreService); readonly session = inject(MockSessionService); readonly search = signal(''); readonly role = signal<UserRole | 'ALL'>('ALL'); readonly status = signal<UserStatus | 'ALL'>('ALL'); readonly roleLabels = roleLabels; readonly filtered = computed(() => { const q = this.search().toLowerCase(); return this.store.users().filter(u => this.role() === 'ALL' || u.role === this.role()).filter(u => this.status() === 'ALL' || u.status === this.status()).filter(u => `${u.firstName} ${u.lastName} ${u.email} ${u.identifier}`.toLowerCase().includes(q)); }); }

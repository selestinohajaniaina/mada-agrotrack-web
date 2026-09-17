import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { cultivatorName, cultivatorLocation } from '../../core/models/cultivator.model';
import { CultivatorStoreService } from '../../core/services/cultivator-store.service';
import { UserStoreService } from '../../core/services/user-store.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';
@Component({ selector: 'app-dashboard', standalone: true, imports: [RouterLink, IonIcon, PageHeaderComponent, StatusBadgeComponent], templateUrl: './dashboard.component.html' })
export class DashboardComponent { readonly store = inject(CultivatorStoreService); readonly users = inject(UserStoreService); readonly name = cultivatorName; readonly location = cultivatorLocation; }

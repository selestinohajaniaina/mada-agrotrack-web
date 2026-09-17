import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MockSessionService } from '../services/mock-session.service';
export const demoAuthGuard: CanActivateFn = () => inject(MockSessionService).isAuthenticated() || inject(Router).createUrlTree(['/login']);
export const demoGuestGuard: CanActivateFn = () => !inject(MockSessionService).isAuthenticated() || inject(Router).createUrlTree(['/dashboard']);

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StoreService } from '../services/store.service';

export const isAuthGuard: CanActivateFn = (route, state) => {
  const storeService = inject(StoreService);
  const router = inject(Router);
  
  if (storeService.isLoget) {
    return storeService.isLoget
  } else {
    router.navigateByUrl('/login');
    return storeService.isLoget
  }
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StoreService } from '../services/store.service';

export const isNotAuthGuard: CanActivateFn = (route, state) => {
  const storeService = inject(StoreService);
  const router = inject(Router);
  console.log(storeService.isLoget);
  
  if (!storeService.isLoget) {
    return true
  } else {
    router.navigateByUrl('/');
    return false
  }
};

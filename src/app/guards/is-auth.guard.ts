import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from '../services/cookie.services';
import { ApiService } from '../services/api/api.service';

export const isAuthGuard: CanActivateFn = (route, state) => {
  const cookie = inject(CookieService);
  const api = inject(ApiService)
  const router = inject(Router);

  if (cookie.getCookie('accessToken')) {
    return true;
  } else {
    api.refreshToken().subscribe({
      next: data => {
        cookie.setCookie('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        return true
      },
      error: error => {
        console.error('Error:', error);
        router.navigate(['/login']);
        return false;
      }
    })
  }
  return false;
};

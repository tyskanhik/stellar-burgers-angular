import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/services/cookie.services';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private _storeservices: StoreService, private router: Router, private cookie: CookieService) { }

  logaut() {
    this._storeservices.logautUser();
    this.cookie.deleteCookie('accessToken');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { deleteCookie } from 'src/app/services/api/cookie';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private _storeservices: StoreService, private router: Router) { }

  logaut() {
    this._storeservices.logautUser();
    deleteCookie('accessToken');
    this.router.navigate(['/login']);
  }
}

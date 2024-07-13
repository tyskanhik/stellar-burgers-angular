import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { User } from '../services/types/types';

import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public User?: User;

  constructor(
    private router: Router, 
    private _store: StoreService, 
    private _api: ApiService
  ) { }

  ngOnInit(): void {
    this._store.user$.subscribe(user => {
      this.User = user;
    });
  }

  userNavigate() {
    !this.User?.email ? this.router.navigate(['/login']) : this.router.navigate(['/profile']);
  }
}

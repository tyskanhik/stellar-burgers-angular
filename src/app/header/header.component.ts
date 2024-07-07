import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { User } from '../services/types/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public User?: User;

  constructor(private router: Router, private _store: StoreService) {}

  ngOnInit(): void {
    this._store.user$.subscribe(user => {
      this.User = user;
    });
  }

  userNavigate() {
    !this.User?.email ? this.router.navigate(['/login']) : this.router.navigate(['/profile']);
  }
}

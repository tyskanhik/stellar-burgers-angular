import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { StoreService } from './services/store.service';
import { ApiUser } from './services/types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stellar-burgers';

  constructor(private api: ApiService, private _storeService: StoreService) {}

  ngOnInit(): void {
    this.api.getUserApi().subscribe({
      next: (data: ApiUser) => {
        this._storeService.setUser({...data.user, isLoget: true});

      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}

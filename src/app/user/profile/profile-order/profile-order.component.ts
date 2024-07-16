import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CookieService } from 'src/app/services/cookie.services';
import { StoreService } from 'src/app/services/store.service';
import { Ingredient, Order, UpdateOrder } from 'src/app/services/types/types';

@Component({
  selector: 'app-profile-order',
  templateUrl: './profile-order.component.html',
  styleUrls: ['./profile-order.component.scss']
})
export class ProfileOrderComponent implements OnInit {
  protected isOrders: boolean = false;
  protected updateOrders: UpdateOrder[] | null = [];

  constructor(
    private _apiServices: ApiService,
    private _storeservices: StoreService,
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
    this._apiServices.getOrderUser(this.cookie.getCookie('accessToken')).subscribe({
      next: (data) => {
        this._storeservices.setOrderUser(data.orders),
        this.isOrders = true,
        this._apiServices.processOrders(data.orders).
          then(res => {
            this.updateOrders = res;
            this.updateOrders?.reverse()
          })
      },
      error: (error) => console.error('Error:', error)
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CookieService } from 'src/app/services/cookie.services';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-profile-order',
  templateUrl: './profile-order.component.html',
  styleUrls: ['./profile-order.component.scss']
})
export class ProfileOrderComponent implements OnInit {
  protected isOrders: boolean = false;
  protected orders: any[] = []
  constructor(
    private _apiServices: ApiService, 
    private _storeservices: StoreService,
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
    this._apiServices.getOrderUser(this.cookie.getCookie('accessToken')).subscribe({
      next: (orders) => {
        this._storeservices.setOrderUser(orders.orders),
        this.orders = orders.orders,
        this.isOrders = true
      },
      error: (error) => console.error('Error:', error)
    })
  }
}

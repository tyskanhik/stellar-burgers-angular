import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { getCookie } from 'src/app/services/token/cookie';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-profile-order',
  templateUrl: './profile-order.component.html',
  styleUrls: ['./profile-order.component.scss']
})
export class ProfileOrderComponent implements OnInit {
  protected orders: any[] = []
  constructor(private _apiServices: ApiService, private _storeservices: StoreService) { }

  ngOnInit(): void {
    this._apiServices.getOrderUser(getCookie('accessToken')).subscribe({
      next: (orders) => {
        this._storeservices.setOrderUser(orders.orders),
        this.orders = orders.orders
      },
      error: (error) => console.error('Error:', error)
    })
  }
}

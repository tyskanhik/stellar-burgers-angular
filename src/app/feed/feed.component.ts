import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Order, Orders, UpdateOrder } from '../services/types/types';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  protected ordersAll?: Orders;
  protected updateOrders: UpdateOrder[] | null = [];
  protected readyOrders: number[] | undefined = [];
  protected pendingOrders: number[] | undefined = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getOrders().subscribe({
      next: (data) => {
        this.ordersAll = data;
        this.api.processOrders(data.orders)
          .then(res => {
            this.updateOrders = res;
            this.readyOrders = this.getOrders(this.updateOrders, 'done')
            this.pendingOrders = this.getOrders(this.updateOrders, 'pending')
          })
      }
    })
  }

  getOrders(orders: UpdateOrder[] | null, status: string): number[] | undefined {
    return orders?.
      filter(item => item.status === status)
      .map(item => item.number)
      .slice(0, 20);
  }
}

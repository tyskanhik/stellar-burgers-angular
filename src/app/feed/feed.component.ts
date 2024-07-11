import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  protected feeds: any[] = []
  constructor(private _apiService: ApiService, private _storeService: StoreService) {}

  ngOnInit(): void {
    this._apiService.getFeeds().subscribe({
      next: (feeds) => {
        this._storeService.setFeeds(feeds.orders);
        this.feeds = feeds.orders
      }
    });
  }

  log() {
    console.log(this.feeds);
  }
}

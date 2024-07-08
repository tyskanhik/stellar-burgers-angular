import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { BurgerConstructorState } from 'src/app/services/types/types';

@Component({
  selector: 'app-burger-constructor',
  templateUrl: './burger-constructor.component.html',
  styleUrls: ['./burger-constructor.component.scss']
})
export class BurgerConstructorComponent implements OnInit {
  protected burgerConstrucor?: BurgerConstructorState;

  constructor(private _sotrService: StoreService) { }

  ngOnInit(): void {
    this._sotrService.constructor$.subscribe(item => this.burgerConstrucor = item)
  }

  click() {
    console.log(!this.burgerConstrucor?.bun);
    
  }
}

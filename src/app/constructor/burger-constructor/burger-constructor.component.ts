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

  up(index: number) {
    console.log(this._sotrService.getConstructorState());
    
    this.burgerConstrucor?.ingredients.splice(
      index - 1,
      2,
      this.burgerConstrucor?.ingredients[index],
      this.burgerConstrucor?.ingredients[index - 1]
    );
  }

  down(index: number) {
    this.burgerConstrucor?.ingredients.splice(
      index,
      2,
      this.burgerConstrucor?.ingredients[index + 1],
      this.burgerConstrucor?.ingredients[index]
    );
  }

  delete(index: number) {
    this.burgerConstrucor?.ingredients.splice(index, 1);
  }

  sumSalaries() {
    console.log(!this.burgerConstrucor?.bun);
    
  }
}

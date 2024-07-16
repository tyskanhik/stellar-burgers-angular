import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CookieService } from 'src/app/services/cookie.services';
import { StoreService } from 'src/app/services/store.service';
import { BurgerConstructorState, initailStateBurgerConstructor } from 'src/app/services/types/types';

@Component({
  selector: 'app-burger-constructor',
  templateUrl: './burger-constructor.component.html',
  styleUrls: ['./burger-constructor.component.scss']
})
export class BurgerConstructorComponent implements OnInit {
  protected burgerConstrucor?: BurgerConstructorState;
  protected loading: boolean = false;

  constructor(
    private _sotrService: StoreService,
    private router: Router,
    private cookie: CookieService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this._sotrService.constructor$.subscribe(item => this.burgerConstrucor = item)
  }

  up(index: number) {
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

  submit() {
    if (
      !!this.cookie.getCookie('accessToken') &&
      !!this.burgerConstrucor?.bun &&
      !!this.burgerConstrucor.ingredients.length
    ) {
      const bunId = this.burgerConstrucor?.bun?._id;
      const ingredientsId = this.burgerConstrucor?.ingredients.map(
        ing => ing._id
      )
      const order = [bunId].concat(ingredientsId);

      this.loading = true;
      this.api.orderBurger(order).subscribe({
        next: res => {
          console.log(res),
            this.loading = false
        },
        error: err => {
          console.log(err),
            this.loading = false
        },
        complete: () => this._sotrService.resetConstructor()
      })
    }
  }
}

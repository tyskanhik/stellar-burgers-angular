import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ApiIngredients, ConstructorIngredient, Ingredient } from 'src/app/services/api/types/types';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {;
  public buns: Ingredient[] = [];
  public mains: Ingredient[] = [];
  public sauces: Ingredient[] = [];

  constructor(private _apiService: ApiService, private _storeService: StoreService) { }

  ngOnInit(): void {
    this._apiService.getIngredients().subscribe(
      (data: ApiIngredients) => {
        this._storeService.setIngredients(data.data);
        this.buns = data.data.filter(i => i.type === 'bun');
        this.mains = data.data.filter(i => i.type ==='main');
        this.sauces = data.data.filter(i => i.type ==='sauce');
      }
    )
  }

  click() {
    console.log(this.mains);
  }
}

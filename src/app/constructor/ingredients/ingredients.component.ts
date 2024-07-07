import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ApiIngredients, Ingredient } from 'src/app/services/api/types/types';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  public ingredients: Ingredient[] = [];

  constructor(private _apiService: ApiService, private _storeService: StoreService) { }

  ngOnInit(): void {
    this._apiService.getIngredients().subscribe(
      (data: ApiIngredients) => {
        this.ingredients = data.data;
        this._storeService.setIngredients(this.ingredients);
      }
    )
  }

  click() {
    console.log(this._storeService.getIngredients());
  }
}

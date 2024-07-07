import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Ingredient } from "./api/types/types";

@Injectable({
    providedIn: "root"
})

export class StoreService {
    private ingredientsSubject = new BehaviorSubject<Ingredient[]>([]);
    ingredients$ = this.ingredientsSubject.asObservable();

    setIngredients(ingredietns: Ingredient[]): void {
        this.ingredientsSubject.next(ingredietns);
    }

    getIngredients(): Ingredient[] {
        return this.ingredientsSubject.getValue();
    }
}
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BurgerConstructorState, Ingredient, User, initailStateBurgerConstructor, initialStateUser } from "./types/types";

@Injectable({
    providedIn: "root"
})

export class StoreService {
    private ingredientsSubject = new BehaviorSubject<Ingredient[]>([]);
    ingredients$ = this.ingredientsSubject.asObservable();

    private constructorSubject = new BehaviorSubject<BurgerConstructorState>(initailStateBurgerConstructor)
    constructor$ = this.constructorSubject.asObservable();

    private userSubject = new BehaviorSubject<User>(initialStateUser)
    user$ = this.userSubject.asObservable();
    isLoget = false;

    setIngredients(ingredietns: Ingredient[]): void {
        this.ingredientsSubject.next(ingredietns);
    }

    getIngredients(): Ingredient[] {
        return this.ingredientsSubject.getValue();
    }

    setUser(user: User): void {
        this.userSubject.next(user);
        this.isLoget = true;
    }

    getUser(): User {
        return this.userSubject.getValue();
    }

    setConstructorState(ingredient: Ingredient): void {
        const id = self.crypto.randomUUID()
        const newIngredient = {...ingredient, id}
        
        if(ingredient.type === 'bun') {
            const currentState = this.constructorSubject.getValue();
            currentState.bun = newIngredient;
            this.constructorSubject.next(currentState);
        } else {
            const currentState = this.constructorSubject.getValue();
            currentState.ingredients.push(newIngredient);
            this.constructorSubject.next(currentState);
        }
    }

    getConstructorState(): BurgerConstructorState {
        return this.constructorSubject.getValue();
    }
}
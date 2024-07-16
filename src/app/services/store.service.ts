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

    private orderUserSubject = new BehaviorSubject({})
    orderUser$ = this.orderUserSubject.asObservable();

    private feedsSubject = new BehaviorSubject<any>([]);
    feeds$ = this.feedsSubject.asObservable;

    setIngredients(ingredietns: Ingredient[]): void {
        this.ingredientsSubject.next(ingredietns);
    }

    getIngredients(): Ingredient[] {
        return this.ingredientsSubject.getValue();
    }

    setUser(user: User): void {
        this.userSubject.next(user);
    }

    getUser(): User {
        return this.userSubject.getValue();
    }

    logautUser() {
        this.userSubject.next(initialStateUser);
    }

    setConstructorState(ingredient: Ingredient): void {
        const id = self.crypto.randomUUID()
        const newIngredient = { ...ingredient, id }

        if (ingredient.type === 'bun') {
            const currentState = this.constructorSubject.getValue();
            currentState.bun = newIngredient;
            this.constructorSubject.next(currentState);
        } else {
            const currentState = this.constructorSubject.getValue();
            currentState.ingredients.push(newIngredient);
            this.constructorSubject.next(currentState);
        }
    }

    resetConstructor(): void {
        this.constructorSubject.next({
            bun: null,
            ingredients: []
        })
    }

    getConstructorState(): BurgerConstructorState {
        return this.constructorSubject.getValue();
    }

    setOrderUser(order: any): void {
        this.orderUserSubject.next(order);
    }

    getOrderUser(): any {
        return this.orderUserSubject.getValue();
    }

    setFeeds(feed: any): void {
        this.feedsSubject.next(feed);
    }

    getFeeds(): any {
        return this.feedsSubject.getValue();
    }
}
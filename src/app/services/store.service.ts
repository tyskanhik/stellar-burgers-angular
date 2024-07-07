import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Ingredient, User, initialStateUser } from "./types/types";

@Injectable({
    providedIn: "root"
})

export class StoreService {
    private ingredientsSubject = new BehaviorSubject<Ingredient[]>([]);
    ingredients$ = this.ingredientsSubject.asObservable();

    private userSubject = new BehaviorSubject<User>(initialStateUser)
    user$ = this.userSubject.asObservable();

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
}
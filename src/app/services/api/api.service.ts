
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from './types/types';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    private readonly apiUrl = 'https://norma.nomoreparties.space/api'

    constructor(private http: HttpClient) {}

    public getIngredients(): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(`${this.apiUrl}/ingredietns`)
    }
}
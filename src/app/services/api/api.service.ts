
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiIngredients, ApiUser, LoginData } from '../types/types';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    private readonly apiUrl = 'https://norma.nomoreparties.space/api'

    constructor(private http: HttpClient) {}

    public getIngredients(): Observable<ApiIngredients> {
        return this.http.get<ApiIngredients>(`${this.apiUrl}/ingredients`)
    }

    public loginUser(user: Partial<LoginData>): Observable<ApiUser> {
        return this.http.post<ApiUser>(`${this.apiUrl}/auth/login`, user)
    }
}
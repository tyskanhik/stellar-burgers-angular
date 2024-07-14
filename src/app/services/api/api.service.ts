
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { ApiIngredients, ApiUser, ApiUserToken, LoginData, Orders, RefreshResponse } from '../types/types';
import { CookieService } from '../cookie.services';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    private readonly apiUrl = 'https://norma.nomoreparties.space/api'

    constructor(private http: HttpClient, private cookie: CookieService) { }

    public getIngredients(): Observable<ApiIngredients> {
        return this.http.get<ApiIngredients>(`${this.apiUrl}/ingredients`)
    }

    public loginUser(user: Partial<LoginData>): Observable<ApiUserToken> {
        return this.http.post<ApiUserToken>(`${this.apiUrl}/auth/login`, user)
    }

    public getUserApi(): Observable<ApiUser> {
        return this.http.get<ApiUser>(`${this.apiUrl}/auth/user`, {
            headers: {
                authorization: this.cookie.getCookie('accessToken')
            }
        })
    }

    public getOrderUser(token: string | undefined): Observable<Orders> {
        return this.http.get<Orders>(`${this.apiUrl}/orders`, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: token || ''
            }
        })
    }

    public refreshToken(): Observable<RefreshResponse> {
        const body = JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
        return this.http.post<RefreshResponse>(`${this.apiUrl}/auth/token`, body, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
    }
}
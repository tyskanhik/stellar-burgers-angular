
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiIngredients, ApiUser, ApiUserToken, Ingredient, LoginData, Order, Orders, RefreshResponse, RegisterUser, UpdateOrder } from '../types/types';
import { CookieService } from '../cookie.services';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    private readonly apiUrl = 'https://norma.nomoreparties.space/api';
    private ingredients: Ingredient[] | null = null;


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

    public updateUserApi(user: Partial<RegisterUser>): Observable<ApiUserToken> {
        return this.http.patch<ApiUserToken>(`${this.apiUrl}/auth/user`, user, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: this.cookie.getCookie('accessToken')
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

    loadIngredients(): Promise<Ingredient[]> {
        return new Promise((resolve, reject) => {
            if (this.ingredients) {
                resolve(this.ingredients);
            } else {
                this.http.get<ApiIngredients>(`${this.apiUrl}/ingredients`).subscribe(ingredients => {
                    this.ingredients = ingredients.data;
                    resolve(ingredients.data);
                }, error => {
                    reject(error);
                });
            }
        });
    }

    async processOrders(orders: Order[]): Promise<UpdateOrder[] | null> {
        try {
            const ingredients = await this.loadIngredients();

            return orders.map(order => {
                const updatedIngredients = order.ingredients.map(ingredientId =>
                    ingredients.find(ingredient => ingredient._id === ingredientId)
                );
                return { ...order, ingredients: updatedIngredients };
            });
        } catch (error) {
            console.error('Ошибка при загрузке ингредиентов:', error);
            return null;
        }
    }

}
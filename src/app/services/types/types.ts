export interface User {
    email: string;
    name: string;
}

export const initialStateUser: User = {
    email: '',
    name: ''
}

export type LoginData = {
    email: string | null;
    password: string | null;
};

export type ApiUser = {
    accessToken: string;
    refreshToken: string;
    success: boolean;
    user: User;
}

export type Ingredient = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_large: string;
    image_mobile: string;
};

export type ConstructorIngredient = Ingredient & {
    id: string;
};

export interface BurgerConstructorState {
    bun: Ingredient | null;
    ingredients: Ingredient[];
}

export const initailStateBurgerConstructor: BurgerConstructorState = {
    bun: null,
    ingredients: []
}

export type ApiIngredients = {
    data: Ingredient[];
    success: boolean;
}
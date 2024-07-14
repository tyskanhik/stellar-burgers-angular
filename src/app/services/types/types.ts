export interface User {
    email: string;
    name: string;
    isLoget: boolean;
}

export const initialStateUser: User = {
    email: '',
    name: '',
    isLoget: false
}

export type LoginData = {
    email: string | null;
    password: string | null;
};

export type ApiUser = {
    success: boolean;
    user: User;
}

export type ApiUserToken = ApiUser & {
    accessToken: string;
    refreshToken: string;
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
    bun: ConstructorIngredient | null;
    ingredients: ConstructorIngredient[];
}

export const initailStateBurgerConstructor: BurgerConstructorState = {
    bun: null,
    ingredients: []
}

export type ApiIngredients = {
    data: Ingredient[];
    success: boolean;
}

export type Order = {
    _id: string;
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    ingredients: string[];
  };

export type Orders = {
    orders: Order[];
    total: number;
    totalToday: number;
}

export type RefreshResponse = {
    refreshToken: string;
    accessToken: string;
};
export interface User {
    email: string;
    name: string;
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

export type ApiIngredients = {
    data: Ingredient[];
    success: boolean;
}
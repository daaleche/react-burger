import { TIngredient } from "../../types";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';

export interface IAddIngredientAction {
    readonly type: typeof ADD_INGREDIENT;
    readonly ingredient: TIngredient;
}

export interface IDeleteIngredientAction {
    readonly type: typeof DELETE_INGREDIENT;
    readonly id: string,
    readonly uuid: string,
}
export interface IMoveIngredientAction {
    readonly type: typeof MOVE_INGREDIENT;
    readonly dragIndex: number;
    readonly hoverIndex: number;
}
export interface IClearConstructor {
    readonly type: typeof CLEAR_INGREDIENTS;
}

export type TBurgerConstructorActions =
    IAddIngredientAction |
    IDeleteIngredientAction |
    IMoveIngredientAction |
    IClearConstructor;
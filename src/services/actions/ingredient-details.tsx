import { TIngredientData } from "../../types";

export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const UNSELECT_INGREDIENT = 'UNSELECT_INGREDIENT';
export const OPEN_INGREDIENT_DETAIL_MODAL = 'OPEN_INGREDIENT_DETAIL_MODAL';
export const CLOSE_INGREDIENT_DETAIL_MODAL = 'CLOSE_INGREDIENT_DETAIL_MODAL';

export interface ISelectIngredientAction {
  readonly type: typeof SELECT_INGREDIENT;
  readonly selectedIngredient: TIngredientData;
}

export interface IUnselectIngredientAction {
  readonly type: typeof UNSELECT_INGREDIENT;
}

export interface IOpenIngredientDetailsModalAction {
  readonly type: typeof OPEN_INGREDIENT_DETAIL_MODAL;
}

export interface ICloseIngredientDetailsModalAction {
  readonly type: typeof CLOSE_INGREDIENT_DETAIL_MODAL;
}

export type TIngredientDetailsActions =
  | ISelectIngredientAction
  | IUnselectIngredientAction
  | IOpenIngredientDetailsModalAction
  | ICloseIngredientDetailsModalAction;

export function selectIngredient(ingredient: TIngredientData) {
  return {
    type: SELECT_INGREDIENT,
    selectedIngredient: ingredient,
  };
}
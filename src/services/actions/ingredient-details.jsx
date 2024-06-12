export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const UNSELECT_INGREDIENT = 'UNSELECT_INGREDIENT';

export const OPEN_INGREDIENT_DETAIL_MODAL = 'OPEN_INGREDIENT_DETAIL_MODAL';
export const CLOSE_INGREDIENT_DETAIL_MODAL = 'CLOSE_INGREDIENT_DETAIL_MODAL';

export function selectIngredient(ingredient) {
  return {
    type: SELECT_INGREDIENT,
    selectedIngredient: ingredient,
  };
}
import { TIngredientData } from '../../types';
import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    TBurgerIngredientsActions,
} from '../actions/burger-ingredients'

type TBurgerIngredientsState = {
    ingredients: TIngredientData[];
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
}

export const initialState: TBurgerIngredientsState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
};

export const burgerIngredientsReducer = (state = initialState, action: TBurgerIngredientsActions) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST:
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false
            }
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredients: action.data,
                ingredientsRequest: false,
                ingredientsFailed: false
            }
        case GET_INGREDIENTS_FAILED:
            return {
                ...state,
                ingredients: [],
                ingredientsRequest: false,
                ingredientsFailed: true
            }
        default:
            return state
    }
};
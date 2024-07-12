import { TIngredientData } from "../../types";
import {
    SELECT_INGREDIENT,
    UNSELECT_INGREDIENT,
    OPEN_INGREDIENT_DETAIL_MODAL,
    CLOSE_INGREDIENT_DETAIL_MODAL,
    TIngredientDetailsActions,
} from "../actions/ingredient-details";

type TIngredientDetailsState = {
    selectedIngredient: TIngredientData | null;
    modalIsOpen: boolean;
}

const initialState: TIngredientDetailsState = {
    selectedIngredient: null,
    modalIsOpen: false,
};

export const ingredientDetailsReducer = (state = initialState, action: TIngredientDetailsActions) => {
    switch (action.type) {
        case SELECT_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: action.selectedIngredient,
            }
        }
        case UNSELECT_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: null,
            }
        }
        case OPEN_INGREDIENT_DETAIL_MODAL: {
            return {
                ...state,
                modalIsOpen: true,
            }
        }
        case CLOSE_INGREDIENT_DETAIL_MODAL: {
            return {
                ...state,
                modalIsOpen: false,
            }
        }
        default: {
            return state;
        }
    }
};
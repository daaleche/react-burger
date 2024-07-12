import { TIngredient } from "../../types";
import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    TBurgerConstructorActions,
} from "../actions/burger-constructor";


type TBurgerConstructorState = {
    ingredients: TIngredient[];
    bun: TIngredient | null;
    counts: any;
};

const initialState: TBurgerConstructorState = {
    ingredients: [],
    bun: null,
    counts: {},
};

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            if (action.ingredient.type === 'bun')
                return {
                    ...state,
                    bun: action.ingredient
                }
            else
                return {
                    ...state,
                    ingredients: [...state.ingredients, action.ingredient],
                    counts: {
                        ...state.counts,
                        [action.ingredient._id]: (state.counts[action.ingredient._id] || 0) + 1
                    }
                }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients].filter((item) => item.uuid !== action.uuid),
                counts: {
                    ...state.counts,
                    [action.id]: state.counts[action.id] - 1
                }
            }
        }
        case MOVE_INGREDIENT: {
            const newIngredients = [...state.ingredients];
            newIngredients.splice(action.dragIndex, 0, newIngredients.splice(action.hoverIndex, 1)[0]);
            return {
                ...state,
                ingredients: newIngredients,
            }
        }
        default: {
            return state;
        }
    }
}
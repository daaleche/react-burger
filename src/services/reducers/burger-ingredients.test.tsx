import { mockIngredients } from "../../utils/test-data";
import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, IGetIngredientsAction, IGetIngredientsFailedAction, IGetIngredientsSuccessAction, TBurgerIngredientsActions } from "../actions/burger-ingredients";
import { burgerIngredientsReducer, initialState } from "./burger-ingredients";


describe('burgerIngredientsReducer', () => {
    it('Должен вернуть initialState', () => {
        expect(burgerIngredientsReducer(undefined, {} as TBurgerIngredientsActions)).toEqual({
            ...initialState,
        });
    });

    it('GET_INGREDIENTS_REQUEST', () => {
        const action: IGetIngredientsAction = {
            type: GET_INGREDIENTS_REQUEST,
        };
        expect(burgerIngredientsReducer(undefined, action)).toEqual({
            ...initialState,
            ingredientsRequest: true,
        });
    });

    it('GET_INGREDIENTS_SUCCESS', () => {
        const action: IGetIngredientsSuccessAction = {
            type: GET_INGREDIENTS_SUCCESS,
            data: mockIngredients,
        };
        expect(burgerIngredientsReducer(undefined, action)).toEqual({
            ...initialState,
            ingredientsRequest: false,
            ingredientsFailed: false,
            ingredients: mockIngredients,
        });
    });

    it('GET_INGREDIENTS_FAILED', () => {
        const action: IGetIngredientsFailedAction = {
            type: GET_INGREDIENTS_FAILED,
        };
        expect(burgerIngredientsReducer(undefined, action)).toEqual({
            ...initialState,
            ingredientsRequest: false,
            ingredientsFailed: true,
            ingredients: [],
        });
    });
});
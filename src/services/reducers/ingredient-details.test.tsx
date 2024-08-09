import { mockIngredientA } from "../../utils/test-data";
import { CLOSE_INGREDIENT_DETAIL_MODAL, ICloseIngredientDetailsModalAction, IOpenIngredientDetailsModalAction, ISelectIngredientAction, IUnselectIngredientAction, OPEN_INGREDIENT_DETAIL_MODAL, SELECT_INGREDIENT, UNSELECT_INGREDIENT } from "../actions/ingredient-details";
import { ingredientDetailsReducer, initialState } from "./ingredient-details";

describe('ingredientDetailsReducer', () => {
    it('initialState', () => {
        expect(ingredientDetailsReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('SELECT_INGREDIENT', () => {
        const action: ISelectIngredientAction = {
            type: SELECT_INGREDIENT,
            selectedIngredient: mockIngredientA,
        };
        expect(ingredientDetailsReducer(undefined, action)).toEqual({
            ...initialState,
            selectedIngredient: mockIngredientA,
        });
    });

    it('UNSELECT_INGREDIENT', () => {
        const action: IUnselectIngredientAction = {
            type: UNSELECT_INGREDIENT,
        };
        expect(ingredientDetailsReducer(undefined, action)).toEqual({
            ...initialState,
            selectedIngredient: null,
        });
    });

    it('OPEN_INGREDIENT_DETAILS_MODAL', () => {
        const action: IOpenIngredientDetailsModalAction = {
            type: OPEN_INGREDIENT_DETAIL_MODAL,
        };
        expect(ingredientDetailsReducer(undefined, action)).toEqual({
            ...initialState,
            modalIsOpen: true,
        });
    });

    it('CLOSE_INGREDIENT_DETAILS_MODAL', () => {
        const action: ICloseIngredientDetailsModalAction = {
            type: CLOSE_INGREDIENT_DETAIL_MODAL,
        };
        expect(ingredientDetailsReducer(undefined, action)).toEqual({
            ...initialState,
            modalIsOpen: false,
        });
    });
});
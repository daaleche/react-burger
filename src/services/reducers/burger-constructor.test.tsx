import { mockConstructorIngredientA, mockConstructorIngredientB } from "../../utils/test-data";
import { ADD_INGREDIENT, CLEAR_INGREDIENTS, DELETE_INGREDIENT, IAddIngredientAction, IClearConstructor, IDeleteIngredientAction, IMoveIngredientAction, MOVE_INGREDIENT, TBurgerConstructorActions } from "../actions/burger-constructor";
import { burgerConstructorReducer, initialState } from "./burger-constructor";


describe('burgerConstructorReducer', () => {
    it('Должен вернуть initialState', () => {
        expect(burgerConstructorReducer(undefined, {} as TBurgerConstructorActions)).toEqual(initialState);
    });

    it('ADD_INGREDIENT', () => {
        const action: IAddIngredientAction = {
            type: ADD_INGREDIENT,
            ingredient: mockConstructorIngredientA,
        };
        expect(burgerConstructorReducer(undefined, action)).toEqual({
            ...initialState,
            ingredients: [mockConstructorIngredientA],
            counts: { [mockConstructorIngredientA._id]: (1) }
        });
    });

    it('DELETE_INGREDIENT', () => {
        const action: IDeleteIngredientAction = {
            type: DELETE_INGREDIENT,
            id: mockConstructorIngredientA._id,
            uuid: mockConstructorIngredientA.uuid,
        };
        expect(burgerConstructorReducer({
            ...initialState,
            ingredients: [mockConstructorIngredientA],
        }, action)).toEqual({
            ...initialState,
            ingredients: [],
            counts: { [mockConstructorIngredientA._id]: (NaN) }
        });
    });

    it('MOVE_INGREDIENT', () => {
        const action: IMoveIngredientAction = {
            type: MOVE_INGREDIENT,
            dragIndex: 0,
            hoverIndex: 1,
        };
        expect(burgerConstructorReducer({
            ...initialState,
            ingredients: [mockConstructorIngredientA, mockConstructorIngredientB],
        }, action)).toEqual({
            ...initialState,
            ingredients: [mockConstructorIngredientB, mockConstructorIngredientA],
        });
    });

    it('CLEAR_INGREDIENTS', () => {
        const action: IClearConstructor = {
            type: CLEAR_INGREDIENTS,
        };
        expect(burgerConstructorReducer({
            ...initialState,
            ingredients: [mockConstructorIngredientA, mockConstructorIngredientB],
        }, action)).toEqual({
            ...initialState,
            ingredients: [],
        });
    });
});

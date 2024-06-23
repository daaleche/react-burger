import { combineReducers } from "redux";
import { burgerIngredientsReducer } from '../reducers/burger-ingredients'
import { burgerConstructorReducer } from '../reducers/burger-constructor'
import { ingredientDetailsReducer } from '../reducers/ingredient-details'
import { orderDetailsReducer } from '../reducers/order-details'
import { userReducer } from '../reducers/user'

export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer,
    userData: userReducer
});
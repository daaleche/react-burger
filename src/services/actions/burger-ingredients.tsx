import { TIngredientData } from '../../types';
import { getIngredientsRequest } from '../../utils/api'
import { AppDispatch } from '../store';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export interface IGetIngredientsAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly data: TIngredientData[];

}
export interface IGetIngredientsFailedAction {
    readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TBurgerIngredientsActions =
    IGetIngredientsAction |
    IGetIngredientsSuccessAction |
    IGetIngredientsFailedAction;


export function getIngredients() {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });
        getIngredientsRequest()
            .then((res) => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    data: res.data
                });
            })
            .catch(() => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                });
            })
    };
}
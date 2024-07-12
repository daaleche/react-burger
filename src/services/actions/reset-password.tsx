import { TResetPassword } from "../../types";
import { resetPasswordRequestApi } from "../../utils/api";
import { AppDispatch } from "../store";

export const POST_RESET_PASSWORD_REQUEST = 'POST_RESET_PASSWORD_REQUEST';
export const POST_RESET_PASSWORD_SUCCESS = 'POST_RESET_PASSWORD_SUCCESS';
export const POST_RESET_PASSWORD_FAILED = 'POST_RESET_PASSWORD_FAILED';

export interface IResetPasswordAction {
    readonly type: typeof POST_RESET_PASSWORD_REQUEST,
}

export interface IResetPasswordSuccessAction {
    readonly type: typeof POST_RESET_PASSWORD_SUCCESS,
}

export interface IResetPasswordFailedAction {
    readonly type: typeof POST_RESET_PASSWORD_FAILED,
}

export type TResetPasswordActions =
    | IResetPasswordAction
    | IResetPasswordSuccessAction
    | IResetPasswordFailedAction;

export function postResetPassword(data: TResetPassword) {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: POST_RESET_PASSWORD_REQUEST,
        });
        resetPasswordRequestApi(data)
            .then(() => {
                dispatch({
                    type: POST_RESET_PASSWORD_SUCCESS,
                });
            })
            .catch(() => {
                dispatch({
                    type: POST_RESET_PASSWORD_FAILED,
                });
            })
    }
}
import { TProfile } from "../../types";
import { registerApi } from "../../utils/api";
import { setCookie } from "../../utils/utils";
import { AppDispatch } from "../store";

export const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST';
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS';
export const POST_REGISTER_FAILED = 'POST_REGISTER_FAILED';

export interface IRegisterAction {
    readonly type: typeof POST_REGISTER_REQUEST;
}

export interface IRegisterSuccessAction {
    readonly type: typeof POST_REGISTER_SUCCESS;
    readonly user: TProfile;
}

export interface IRegisterFailedAction {
    readonly type: typeof POST_REGISTER_FAILED;
}

export type TRegisterActions =
    | IRegisterAction
    | IRegisterSuccessAction
    | IRegisterFailedAction;

export function postRegister(data: TProfile) {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: POST_REGISTER_REQUEST
        });
        registerApi(data)
            .then((res) => {
                dispatch({
                    type: POST_REGISTER_SUCCESS,
                    user: res.user
                });

                setCookie('accessToken', res.accessToken);
                localStorage.setItem('refreshToken', res.refreshToken);
            })
            .catch((err) => {
                dispatch({
                    type: POST_REGISTER_FAILED
                });
            })
    };
}
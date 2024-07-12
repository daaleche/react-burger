import { TLogin, TProfile } from "../../types";
import { loginApi } from "../../utils/api";
import { setCookie } from "../../utils/utils";
import { AppDispatch } from "../store";

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILED = 'POST_LOGIN_FAILED';

export interface ILoginAction {
    readonly type: typeof POST_LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
    readonly type: typeof POST_LOGIN_SUCCESS;
    readonly user: TProfile;
}

export interface ILoginFailedAction {
    readonly type: typeof POST_LOGIN_FAILED;
}

export type TLoginActions =
    | ILoginAction
    | ILoginSuccessAction
    | ILoginFailedAction;

export function postLogin(data: TLogin) {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: POST_LOGIN_REQUEST
        });
        loginApi(data)
            .then((res) => {
                dispatch({
                    type: POST_LOGIN_SUCCESS,
                    user: res.user
                });

                setCookie('accessToken', res.accessToken);
                localStorage.setItem('refreshToken', res.refreshToken);
            })
            .catch((err) => {
                dispatch({
                    type: POST_LOGIN_FAILED
                });
            })
    };
}
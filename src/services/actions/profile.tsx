import { TProfile } from "../../types";
import { updateUserApi, refreshTokenApi, getUserApi, logoutApi } from "../../utils/api";
import { deleteCookie, setCookie } from "../../utils/utils";
import { AppDispatch } from "../store";

export const EDIT_PROFILE_REQUEST = 'EDIT_PROFILE_REQUEST';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILED = 'EDIT_PROFILE_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export interface IEditProfileAction {
    readonly type: typeof EDIT_PROFILE_REQUEST;
}

export interface IEditProfileSuccessAction {
    readonly type: typeof EDIT_PROFILE_SUCCESS;
    readonly user: TProfile;
}

export interface IEditProfileFailedAction {
    readonly type: typeof EDIT_PROFILE_FAILED;
    readonly message: string;
}

export interface IGetUserAction {
    readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS;
    readonly user: TProfile;
}

export interface IGetUserFailedAction {
    readonly type: typeof GET_USER_FAILED;
    readonly message: string;
}

export interface IRefreshTokenAction {
    readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccessAction {
    readonly type: typeof REFRESH_TOKEN_SUCCESS;
}

export interface IRefreshTokenFailedAction {
    readonly type: typeof REFRESH_TOKEN_FAILED;
}

export interface ILogoutAction {
    readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccessAction {
    readonly type: typeof LOGOUT_SUCCESS;
}

export interface ILogoutFailedAction {
    readonly type: typeof LOGOUT_FAILED;
}

export type TProfileActions =
    | IEditProfileAction
    | IEditProfileSuccessAction
    | IEditProfileFailedAction
    | IGetUserAction
    | IGetUserSuccessAction
    | IGetUserFailedAction
    | IRefreshTokenAction
    | IRefreshTokenSuccessAction
    | IRefreshTokenFailedAction
    | ILogoutAction
    | ILogoutSuccessAction
    | ILogoutFailedAction;

export function editProfile(data: TProfile) {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: EDIT_PROFILE_REQUEST
        });
        updateUserApi(data)
            .then((res) => {
                dispatch({
                    type: EDIT_PROFILE_SUCCESS,
                    user: res.user
                });
            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(refreshToken());
                    dispatch(editProfile(data));
                } else {
                    dispatch({
                        type: EDIT_PROFILE_FAILED,
                        message: err.message
                    });
                }
            })
    };
}

export function getUser() {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_USER_REQUEST
        });
        getUserApi()
            .then((res) => {
                dispatch({
                    type: GET_USER_SUCCESS,
                    user: res.user
                });
            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(refreshToken());
                } else {
                    dispatch({
                        type: GET_USER_FAILED,
                        message: err.message
                    });
                }
            })
    };
}

export function refreshToken() {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: REFRESH_TOKEN_REQUEST
        });
        refreshTokenApi()
            .then((res) => {
                dispatch({
                    type: REFRESH_TOKEN_SUCCESS
                });

                deleteCookie('accessToken');
                localStorage.removeItem('refreshToken');

                setCookie('accessToken', res.accessToken);
                localStorage.setItem('refreshToken', res.refreshToken);
            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(refreshToken());
                } else {
                    dispatch({
                        type: REFRESH_TOKEN_FAILED,
                        message: err.message
                    });
                }
            })
    };
}

export function logout() {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: LOGOUT_REQUEST
        });
        logoutApi()
            .then((res) => {
                dispatch({
                    type: LOGOUT_SUCCESS
                });

                deleteCookie('accessToken');
                localStorage.removeItem('refreshToken');
            })
            .catch((err) => {
                dispatch({
                    type: LOGOUT_FAILED,
                    message: err.message
                });

                deleteCookie('accessToken');
                localStorage.removeItem('refreshToken');
            })
    };
}

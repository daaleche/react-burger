import { updateUserApi, refreshTokenApi, getUserApi, logoutApi } from "../../utils/api";
import { deleteCookie, setCookie } from "../../utils/utils";

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

export function editProfile(data) {
    return function (dispatch) {
        dispatch({
            type: EDIT_PROFILE_REQUEST
        });
        updateUserApi(data)
            .then((res) => {
                dispatch({
                    type: EDIT_PROFILE_SUCCESS,
                    user: res.user
                });

                console.log(res.message);
            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(refreshToken());
                } else {
                    dispatch({
                        type: EDIT_PROFILE_FAILED,
                        message: err.message
                    });
                }

                console.log(err.message);
            })
    };
}

export function getUser() {
    return function (dispatch) {
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

                console.log(err.message);
            })
    };
}

export function refreshToken() {
    return function (dispatch) {
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

                console.log(res.message);
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

                console.log(err.message);
            })
    };
}

export function logout() {
    return function (dispatch) {
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

                console.log(res.message);
            })
            .catch((err) => {
                dispatch({
                    type: LOGOUT_FAILED,
                    message: err.message
                });

                deleteCookie('accessToken');
                localStorage.removeItem('refreshToken');

                console.log(err.message);
            })
    };
}

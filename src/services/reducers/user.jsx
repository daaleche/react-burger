import {
    POST_REGISTER_REQUEST,
    POST_REGISTER_SUCCESS,
    POST_REGISTER_FAILED,
} from '../actions/register';

import {
    POST_FORGOT_PASSWORD_REQUEST,
    POST_FORGOT_PASSWORD_FAILED,
    POST_FORGOT_PASSWORD_SUCCESS,
} from '../actions/forgot-password';

import {
    POST_RESET_PASSWORD_REQUEST,
    POST_RESET_PASSWORD_SUCCESS,
    POST_RESET_PASSWORD_FAILED
} from '../actions/reset-password';

import {
    POST_LOGIN_REQUEST,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILED
} from '../actions/login';

import {
    EDIT_PROFILE_REQUEST,
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    REFRESH_TOKEN_REQUEST,
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED
} from '../actions/profile'

const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
    },

    registerRequest: false,
    registerFailed: false,

    loginRequest: false,
    loginSuccess: false,
    loginFailed: false,

    forgotPasswordRequest: false,
    forgotPasswordSuccess: false,
    forgotPasswordFailed: false,

    resetPasswordRequest: false,
    resetPasswordSuccess: false,
    resetPasswordFailed: false,

    editProfileRequest: false,
    editProfileFailed: false,

    getUserRequest: false,
    getUserFailed: false,

    refreshTokenRequest: false,
    refreshTokenFailed: false,

    logoutRequest: false,
    logoutFailed: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REGISTER_REQUEST: {
            return {
                ...state,
                registerRequest: true,
                registerFailed: false,
            }
        }
        case POST_REGISTER_SUCCESS: {
            return {
                ...state,
                registerRequest: false,
                user: {
                    ...state.user,
                    name: action.user.name,
                    email: action.user.email,
                },
            }
        }
        case POST_REGISTER_FAILED: {
            return {
                ...state,
                registerRequest: false,
                registerFailed: true,
            }
        }
        case POST_LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true,
                loginSuccess: false,
                loginFailed: false,
            }
        }
        case POST_LOGIN_SUCCESS: {
            return {
                ...state,
                loginRequest: false,
                loginSuccess: true,
                user: {
                    ...state.user,
                    name: action.user.name,
                    email: action.user.email,
                },
            }
        }
        case POST_LOGIN_FAILED: {
            return {
                ...state,
                loginSuccess: false,
                loginRequest: false,
                loginFailed: true,
            }
        }
        case POST_FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true,
                forgotPasswordFailed: false,
                forgotPasswordSuccess: false,
            }
        }
        case POST_FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordSuccess: true,
            }
        }
        case POST_FORGOT_PASSWORD_FAILED: {
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordFailed: true,
            }
        }
        case POST_RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordRequest: true,
                resetPasswordFailed: false,
                resetPasswordSuccess: false,
            }
        }
        case POST_RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordSuccess: true,
            }
        }
        case POST_RESET_PASSWORD_FAILED: {
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordFailed: true,
            }
        }
        case EDIT_PROFILE_REQUEST: {
            return {
                ...state,
                editProfileRequest: true,
                editProfileFailed: false,
            }
        }
        case EDIT_PROFILE_SUCCESS: {
            return {
                ...state,
                editProfileRequest: false,
                user: {
                    ...state.user,
                    name: action.user.name,
                    email: action.user.email,
                }
            }
        }
        case EDIT_PROFILE_FAILED: {
            return {
                ...state,
                editProfileRequest: false,
                editProfileFailed: true,
            }
        }
        case GET_USER_REQUEST: {
            return {
                ...state,
                getUserRequest: true,
                getUserFailed: false,
            }
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                getUserRequest: false,
                user: {
                    ...state.user,
                    name: action.user.name,
                    email: action.user.email,
                }
            }
        }
        case GET_USER_FAILED: {
            return {
                ...state,
                getUserRequest: false,
                getUserFailed: true,
            }
        }
        case REFRESH_TOKEN_REQUEST: {
            return {
                ...state,
                refreshTokenRequest: true,
                refreshTokenFailed: false,
                getUserFailed: false,
                editProfileFailed: false,
            }
        }
        case REFRESH_TOKEN_SUCCESS: {
            return {
                ...state,
                refreshTokenRequest: false,
            }
        }
        case REFRESH_TOKEN_FAILED: {
            return {
                ...state,
                refreshTokenRequest: false,
                refreshTokenFailed: true,
            }
        }
        case LOGOUT_REQUEST: {
            return {
                ...state,
                logoutRequest: true,
                logoutFailed: false,
            }
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                logoutRequest: false,
            }
        }
        case LOGOUT_FAILED: {
            return {
                ...state,
                logoutRequest: false,
                logoutFailed: true,
            }
        }
        default: {
            return state;
        }
    }
};
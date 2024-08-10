import { IForgotPasswordAction, IForgotPasswordFailedAction, IForgotPasswordSuccessAction, POST_FORGOT_PASSWORD_FAILED, POST_FORGOT_PASSWORD_REQUEST, POST_FORGOT_PASSWORD_SUCCESS } from "../actions/forgot-password";
import { ILoginAction, ILoginFailedAction, ILoginSuccessAction, POST_LOGIN_FAILED, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "../actions/login";
import {
    EDIT_PROFILE_FAILED,
    EDIT_PROFILE_REQUEST,
    EDIT_PROFILE_SUCCESS,
    GET_USER_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    IEditProfileAction,
    IEditProfileFailedAction,
    IEditProfileSuccessAction,
    IGetUserAction,
    IGetUserFailedAction,
    IGetUserSuccessAction,
    ILogoutAction,
    ILogoutFailedAction,
    ILogoutSuccessAction,
    IRefreshTokenAction,
    IRefreshTokenFailedAction,
    IRefreshTokenSuccessAction,
    LOGOUT_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    REFRESH_TOKEN_FAILED,
    REFRESH_TOKEN_REQUEST,
    REFRESH_TOKEN_SUCCESS
} from "../actions/profile";
import { IRegisterAction, IRegisterFailedAction, IRegisterSuccessAction, POST_REGISTER_FAILED, POST_REGISTER_REQUEST, POST_REGISTER_SUCCESS } from "../actions/register";
import { IResetPasswordAction, IResetPasswordFailedAction, IResetPasswordSuccessAction, POST_RESET_PASSWORD_FAILED, POST_RESET_PASSWORD_REQUEST, POST_RESET_PASSWORD_SUCCESS } from "../actions/reset-password";
import { initialState, TAccessActions, userReducer } from "./user";

describe('accessReducer', () => {
    it('Должен вернуть initialState', () => {
        expect(userReducer(undefined, {} as TAccessActions)).toEqual(initialState);
    });

    it('POST_REGISTER_REQUEST', () => {
        const action: IRegisterAction = {
            type: POST_REGISTER_REQUEST,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            registerRequest: true,
            registerFailed: false,
        });
    });

    it('POST_REGISTER_SUCCESS', () => {
        const action: IRegisterSuccessAction = {
            type: POST_REGISTER_SUCCESS,
            user: {
                name: 'name',
                email: '',
                password: ''
            }
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            registerRequest: false,
            user: {
                ...initialState.user,
                name: action.user.name,
                email: action.user.email,
                password: action.user.password,
            },
            isAuth: true,
        });
    });

    it('POST_REGISTER_FAILED', () => {
        const action: IRegisterFailedAction = {
            type: POST_REGISTER_FAILED,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            registerRequest: false,
            registerFailed: true,
        });
    });

    it('POST_LOGIN_REQUEST', () => {
        const action: ILoginAction = {
            type: POST_LOGIN_REQUEST,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            loginRequest: true,
            loginFailed: false,
        })
    });

    it('POST_LOGIN_SUCCESS', () => {
        const action: ILoginSuccessAction = {
            type: POST_LOGIN_SUCCESS,
            user: {
                name: '',
                email: '',
                password: ''
            }
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            loginRequest: false,
            loginSuccess: true,
            user: {
                ...initialState.user,
                name: action.user.name,
                email: action.user.email,
                password: action.user.password
            },
            isAuth: true,
        });
    });

    it('POST_LOGIN_FAILED', () => {
        const action: ILoginFailedAction = {
            type: POST_LOGIN_FAILED,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            loginRequest: false,
            loginFailed: true,
        })
    });

    it('POST_FORGOT_PASSWORD_REQUEST', () => {
        const action: IForgotPasswordAction = {
            type: POST_FORGOT_PASSWORD_REQUEST,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            forgotPasswordRequest: true,
            forgotPasswordFailed: false,
            forgotPasswordSuccess: false,
        })
    });

    it('POST_FORGOT_PASSWORD_SUCCESS', () => {
        const action: IForgotPasswordSuccessAction = {
            type: POST_FORGOT_PASSWORD_SUCCESS,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            forgotPasswordRequest: false,
            forgotPasswordSuccess: true,
        });
    });

    it('POST_FORGOT_PASSWORD_FAILED', () => {
        const action: IForgotPasswordFailedAction = {
            type: POST_FORGOT_PASSWORD_FAILED,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            forgotPasswordRequest: false,
            forgotPasswordFailed: true,
        })
    });

    it('POST_RESET_PASSWORD_REQUEST', () => {
        const action: IResetPasswordAction = {
            type: POST_RESET_PASSWORD_REQUEST,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            resetPasswordRequest: true,
            resetPasswordFailed: false,
            resetPasswordSuccess: false,
        })
    });

    it('POST_RESET_PASSWORD_SUCCESS', () => {
        const action: IResetPasswordSuccessAction = {
            type: POST_RESET_PASSWORD_SUCCESS,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            resetPasswordRequest: false,
            resetPasswordSuccess: true,
        });
    });

    it('POST_RESET_PASSWORD_FAILED', () => {
        const action: IResetPasswordFailedAction = {
            type: POST_RESET_PASSWORD_FAILED,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            resetPasswordRequest: false,
            resetPasswordFailed: true,
        })
    });

    it('EDIT_PROFILE_REQUEST', () => {
        const action: IEditProfileAction = {
            type: EDIT_PROFILE_REQUEST,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            editProfileRequest: true,
            editProfileFailed: false,
        })
    });

    it('EDIT_PROFILE_SUCCESS', () => {
        const action: IEditProfileSuccessAction = {
            type: EDIT_PROFILE_SUCCESS,
            user: {
                name: '',
                email: '',
                password: ''
            }
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            editProfileRequest: false,
            user: {
                ...initialState.user,
                name: action.user.name,
                email: action.user.email,
                password: action.user.password
            }
        });
    });

    it('EDIT_PROFILE_FAILED', () => {
        const action: IEditProfileFailedAction = {
            type: EDIT_PROFILE_FAILED,
            message: '',
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            editProfileRequest: false,
            editProfileFailed: true,
        })
    });

    it('GET_USER_REQUEST', () => {
        const action: IGetUserAction = {
            type: GET_USER_REQUEST,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            getUserRequest: true,
            getUserFailed: false,
        })
    });

    it('GET_USER_SUCCESS', () => {
        const action: IGetUserSuccessAction = {
            type: GET_USER_SUCCESS,
            user: {
                name: '',
                email: '',
                password: ''
            }
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            getUserRequest: false,
            isAuth: true,
            user: {
                ...initialState.user,
                name: action.user.name,
                email: action.user.email,
                password: action.user.password,
            }
        });
    });

    it('GET_USER_FAILED', () => {
        const action: IGetUserFailedAction = {
            type: GET_USER_FAILED,
            message: ''
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            getUserRequest: false,
            getUserFailed: true,
            isAuth: false,
        })
    });

    it('REFRESH_TOKEN_REQUEST', () => {
        const action: IRefreshTokenAction = {
            type: REFRESH_TOKEN_REQUEST,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            refreshTokenRequest: true,
            refreshTokenFailed: false,
            getUserFailed: false,
            editProfileFailed: false,
        })
    });

    it('REFRESH_TOKEN_SUCCESS', () => {
        const action: IRefreshTokenSuccessAction = {
            type: REFRESH_TOKEN_SUCCESS,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            refreshTokenRequest: false,
            isAuth: true
        });
    });

    it('REFRESH_TOKEN_FAILED', () => {
        const action: IRefreshTokenFailedAction = {
            type: REFRESH_TOKEN_FAILED,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            refreshTokenRequest: false,
            refreshTokenFailed: true,
            isAuth: false,
        })
    });

    it('LOGOUT_REQUEST', () => {
        const action: ILogoutAction = {
            type: LOGOUT_REQUEST,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            isAuth: false,
            logoutRequest: true,
            logoutFailed: false,
        })
    });

    it('LOGOUT_SUCCESS', () => {
        const action: ILogoutSuccessAction = {
            type: LOGOUT_SUCCESS,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            logoutRequest: false,
        });
    });

    it('LOGOUT_FAILED', () => {
        const action: ILogoutFailedAction = {
            type: LOGOUT_FAILED,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            logoutRequest: false,
            logoutFailed: true,
        })
    });
});
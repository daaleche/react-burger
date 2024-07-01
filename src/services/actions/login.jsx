import { loginApi } from "../../utils/api";
import { setCookie } from "../../utils/utils";

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILED = 'POST_LOGIN_FAILED';


export function postLogin(data) {
    return function (dispatch) {
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
import { registerApi } from "../../utils/api";
import { setCookie } from "../../utils/utils";

export const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST';
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS';
export const POST_REGISTER_FAILED = 'POST_REGISTER_FAILED';

export function postRegister(data) {
    return function (dispatch) {
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

                console.log(res.message);
            })
            .catch((err) => {
                dispatch({
                    type: POST_REGISTER_FAILED
                });
                console.log(err.message);
            })
    };
}
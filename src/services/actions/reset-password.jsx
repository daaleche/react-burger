import { resetPasswordRequestApi } from "../../utils/api";

export const POST_RESET_PASSWORD_REQUEST = 'POST_RESET_PASSWORD_REQUEST';
export const POST_RESET_PASSWORD_SUCCESS = 'POST_RESET_PASSWORD_SUCCESS';
export const POST_RESET_PASSWORD_FAILED = 'POST_RESET_PASSWORD_FAILED';

export function postResetPassword(data) {
    return function (dispatch) {
        dispatch({
            type: POST_RESET_PASSWORD_REQUEST,
        });
        resetPasswordRequestApi(data)
            .then((res) => {
                dispatch({
                    type: POST_RESET_PASSWORD_SUCCESS,
                });

                console.log(res.message);
            })
            .catch((err) => {
                dispatch({
                    type: POST_RESET_PASSWORD_FAILED,
                });
                console.log(err.message);
            })
    }
}
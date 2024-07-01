import { forgotPasswordRequestApi } from "../../utils/api";

export const POST_FORGOT_PASSWORD_REQUEST = 'POST_FORGOT_PASSWORD_REQUEST';
export const POST_FORGOT_PASSWORD_SUCCESS = 'POST_FORGOT_PASSWORD_SUCCESS';
export const POST_FORGOT_PASSWORD_FAILED = 'POST_FORGOT_PASSWORD_FAILED';

export function postForgotPassword(email) {
  return function (dispatch) {
    dispatch({
      type: POST_FORGOT_PASSWORD_REQUEST
    });
    forgotPasswordRequestApi(email)
      .then((res) => {
        dispatch({
          type: POST_FORGOT_PASSWORD_SUCCESS
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_FORGOT_PASSWORD_FAILED
        });
      })
  };
}
import { forgotPasswordRequestApi } from "../../utils/api";
import { AppDispatch } from "../store";

export const POST_FORGOT_PASSWORD_REQUEST = 'POST_FORGOT_PASSWORD_REQUEST';
export const POST_FORGOT_PASSWORD_SUCCESS = 'POST_FORGOT_PASSWORD_SUCCESS';
export const POST_FORGOT_PASSWORD_FAILED = 'POST_FORGOT_PASSWORD_FAILED';

export interface IForgotPasswordAction {
  readonly type: typeof POST_FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccessAction {
  readonly type: typeof POST_FORGOT_PASSWORD_SUCCESS;
}

export interface IForgotPasswordFailedAction {
  readonly type: typeof POST_FORGOT_PASSWORD_FAILED;
}

export type TForgotPasswordActions =
  | IForgotPasswordAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailedAction

export function postForgotPassword(email: string) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: POST_FORGOT_PASSWORD_REQUEST
    });
    forgotPasswordRequestApi(email)
      .then(() => {
        dispatch({
          type: POST_FORGOT_PASSWORD_SUCCESS
        });
      })
      .catch(() => {
        dispatch({
          type: POST_FORGOT_PASSWORD_FAILED
        });
      })
  };
}
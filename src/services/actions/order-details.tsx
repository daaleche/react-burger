import { postOrderRequest } from "../../utils/api";
import { AppDispatch } from "../store";

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';
export const OPEN_ORDER_DETAIL_MODAL = 'OPEN_ORDER_DETAIL_MODAL';
export const CLOSE_ORDER_DETAIL_MODAL = 'CLOSE_ORDER_DETAIL_MODAL';

export interface IOpenOrderDetailModal {
  readonly type: typeof OPEN_ORDER_DETAIL_MODAL;
}

export interface ICloseOrderDetailModal {
  readonly type: typeof CLOSE_ORDER_DETAIL_MODAL;
}

export interface IPostOrderAction {
  readonly type: typeof POST_ORDER_REQUEST;
}

export interface IPostOrderSuccessAction {
  readonly type: typeof POST_ORDER_SUCCESS;
  readonly orderId: string;
}

export interface IPostOrderFailedAction {
  readonly type: typeof POST_ORDER_FAILED;
}

export type TOrderDetailsActions =
  | IOpenOrderDetailModal
  | ICloseOrderDetailModal
  | IPostOrderAction
  | IPostOrderSuccessAction
  | IPostOrderFailedAction;


export function postOrder(ids: Array<string>) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: POST_ORDER_REQUEST
    });
    postOrderRequest(ids)
      .then((res) => {
        dispatch({
          type: POST_ORDER_SUCCESS,
          orderId: res.order.number.toString()
        });
        dispatch({
          type: OPEN_ORDER_DETAIL_MODAL,
        });
      })
      .catch(() => {
        dispatch({
          type: POST_ORDER_FAILED
        });
      })
  };
}
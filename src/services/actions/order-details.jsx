import { postOrderRequest } from "../../utils/api";

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';

export const OPEN_ORDER_DETAIL_MODAL = 'OPEN_ORDER_DETAIL_MODAL';
export const CLOSE_ORDER_DETAIL_MODAL = 'CLOSE_ORDER_DETAIL_MODAL';

export function postOrder(ids) {
  return function (dispatch) {
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
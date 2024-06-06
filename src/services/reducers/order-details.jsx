import {
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS,
    POST_ORDER_FAILED,
    OPEN_ORDER_DETAIL_MODAL,
    CLOSE_ORDER_DETAIL_MODAL,
} from "../actions/order-details";

const initialState = {
    orderId: '',
    placeOrderRequest: false,
    placeOrderFailed: false,
    modalIsOpen: false,
};

export const orderDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_ORDER_REQUEST: {
            return {
                ...state,
                placeOrderRequest: true,
            }
        }
        case POST_ORDER_SUCCESS: {
            return {
                ...state,
                placeOrderRequest: false,
                placeOrderFailed: false,
                orderId: action.orderId,
            }
        }
        case POST_ORDER_FAILED: {
            return {
                ...state,
                placeOrderRequest: false,
                placeOrderFailed: true,
                orderId: '',
            }
        }
        case OPEN_ORDER_DETAIL_MODAL: {
            return {
                ...state,
                modalIsOpen: true,
            }
        }
        case CLOSE_ORDER_DETAIL_MODAL: {
            return {
                ...state,
                modalIsOpen: false,
            }
        }
        default: {
            return state;
        }
    }
};
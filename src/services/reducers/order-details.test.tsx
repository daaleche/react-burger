import { CLOSE_ORDER_DETAIL_MODAL, ICloseOrderDetailModal, IOpenOrderDetailModal, IPostOrderAction, IPostOrderFailedAction, IPostOrderSuccessAction, OPEN_ORDER_DETAIL_MODAL, POST_ORDER_FAILED, POST_ORDER_REQUEST, POST_ORDER_SUCCESS } from "../actions/order-details";
import { initialState, orderDetailsReducer } from "./order-details";


describe('orderDetailsReducer', () => {
    it('initialState', () => {
        expect(orderDetailsReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('POST_ORDER_REQUEST', () => {
        const action: IPostOrderAction = {
            type: POST_ORDER_REQUEST,
        };
        expect(orderDetailsReducer(undefined, action)).toEqual({
            ...initialState,
            placeOrderRequest: true,
        });
    });

    it('POST_ORDER_SUCCESS', () => {
        const action: IPostOrderSuccessAction = {
            type: POST_ORDER_SUCCESS,
            orderId: '12345',
        };
        expect(orderDetailsReducer(undefined, action)).toEqual({
            ...initialState,
            placeOrderRequest: false,
            placeOrderFailed: false,
            orderId: '12345',
        });
    });

    it('POST_ORDER_FAILED', () => {
        const action: IPostOrderFailedAction = {
            type: POST_ORDER_FAILED,
        };
        expect(orderDetailsReducer(undefined, action)).toEqual({
            ...initialState,
            placeOrderRequest: false,
            placeOrderFailed: true,
            orderId: '',
        });
    });

    it('OPEN_ORDER_DETAIL_MODAL', () => {
        const action: IOpenOrderDetailModal = {
            type: OPEN_ORDER_DETAIL_MODAL,
        };
        expect(orderDetailsReducer(undefined, action)).toEqual({
            ...initialState,
            modalIsOpen: true,
        });
    });

    it('CLOSE_ORDER_DETAIL_MODAL', () => {
        const action: ICloseOrderDetailModal = {
            type: CLOSE_ORDER_DETAIL_MODAL,
        };
        expect(orderDetailsReducer(undefined, action)).toEqual({
            ...initialState,
            modalIsOpen: false,
        });
    });
});
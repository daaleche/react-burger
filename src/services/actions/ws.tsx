import { TGetOrdersResponse, TOrder } from "../../types";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';
export const WS_GET_USER_ORDERS: 'WS_GET_USER_ORDERS' = 'WS_GET_USER_ORDERS';
export const WS_SEND_ORDER: 'WS_SEND_ORDER' = 'WS_SEND_ORDER';

export interface IWSConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START;
    readonly wsUrl: string;
}

export interface IWSConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: Event;
}

export interface IWSConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IWSConnectionGetOrdersAction {
    readonly type: typeof WS_GET_ORDERS;
    readonly payload: TGetOrdersResponse;
}

export interface IWSConnectionSendOrderAction {
    readonly type: typeof WS_SEND_ORDER;
    readonly payload: TOrder;
}

export type TWSActions =
    | IWSConnectionStartAction
    | IWSConnectionSuccessAction
    | IWSConnectionErrorAction
    | IWSConnectionClosedAction
    | IWSConnectionGetOrdersAction
    | IWSConnectionSendOrderAction;

export const wsConnectionStartAction = (wsUrl: string): IWSConnectionStartAction => {
    return {
        type: WS_CONNECTION_START,
        wsUrl,
    };
};

export const wsConnectionSuccessAction = (): IWSConnectionSuccessAction => {
    return {
        type: WS_CONNECTION_SUCCESS
    };
};

export const wsConnectionErrorAction = (error: Event): IWSConnectionErrorAction => {
    return {
        type: WS_CONNECTION_ERROR,
        payload: error,
    };
};

export const wsConnectionClosedAction = (): IWSConnectionClosedAction => {
    return {
        type: WS_CONNECTION_CLOSED
    };
};

export const wsConnectionGetOrdersAction = (response: TGetOrdersResponse): IWSConnectionGetOrdersAction => {
    return {
        type: WS_GET_ORDERS,
        payload: response,
    };
};

export const wsConnectionSendOrderAction = (order: TOrder): IWSConnectionSendOrderAction => {
    return {
        type: WS_SEND_ORDER,
        payload: order,
    };
};

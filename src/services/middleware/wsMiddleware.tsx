import { Middleware, MiddlewareAPI, UnknownAction } from "redux";
import { AppDispatch, RootState } from "../store";
import { TWSOrderActions } from "../../types";

export const wsMiddleware = (wsActions: TWSOrderActions): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return (next) => (action: UnknownAction) => {
            const { dispatch } = store;
            const { type, payload, wsUrl } = action;
            const { wsInit, onOpen, onError, onOrders, onClose, onSendOrders } = wsActions;

            if (type === wsInit) {
                socket = new WebSocket(wsUrl as string);
            }

            if (socket) {
                socket.onopen = () => {
                    dispatch({ type: onOpen });
                };

                socket.onerror = (event) => {
                    dispatch({ type: onError, payload: event });
                };

                socket.onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    if (data.success) {
                        dispatch({ type: onOrders, payload: data });
                    } else {
                        socket!.close();
                    }
                };

                socket.onclose = () => {
                    dispatch({ type: onClose });
                };

                if (type === onClose) {
                    socket.close();
                }

                if (type === onSendOrders) {
                    socket.send(JSON.stringify(payload));
                }
            }
            next(action);
        };
    }) as Middleware;
};
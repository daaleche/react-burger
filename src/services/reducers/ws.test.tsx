import { mockWSOrderA, mockWSOrdersResponse } from "../../utils/test-data";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_ORDERS } from "../actions/ws";
import { initialState, wsReducer } from "./ws";

describe('wsReducer', () => {
    it('initialState', () => {
        expect(wsReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('WS_CONNECTION_START', () => {
        const action = {
            type: WS_CONNECTION_START,
            wsUrl: 'string',
        };
        expect(wsReducer(undefined, action)).toEqual({
            ...initialState,
            loading: true,
        })
    });

    it('WS_CONNECTION_SUCCESS', () => {
        const action = {
            type: WS_CONNECTION_SUCCESS,
        };
        expect(wsReducer(undefined, action)).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: true,
        })
    });

    it('WS_CONNECTION_ERROR', () => {
        const action = {
            type: WS_CONNECTION_ERROR,
            payload: 'error' as any,
        };
        expect(wsReducer(undefined, action)).toEqual({
            ...initialState,
            error: 'error',
            wsConnected: false,
            loading: false,
        });
    });

    it('WS_CONNECTION_CLOSED', () => {
        const action = {
            type: WS_CONNECTION_CLOSED,
        };
        expect(wsReducer(undefined, action)).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: false,
            loading: false,
        })
    });

    it('WS_GET_ORDERS', () => {
        const action = {
            type: WS_GET_ORDERS,
            payload: mockWSOrdersResponse,
        };
        expect(wsReducer(undefined, action)).toEqual({
            ...initialState,
            error: undefined,
            orders: [mockWSOrderA],
            total: mockWSOrdersResponse.total,
            totalToday: mockWSOrdersResponse.totalToday,
            loading: false,
        })
    });

});
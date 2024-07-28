import { ReactNode } from "react";
import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_ORDERS,
    WS_SEND_ORDER
} from "../services/actions/ws";

export type TIngredientData = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

export type TIngredient = TIngredientData & {
    uuid: string;
}

export type TModalOverlay = {
    onClose: (e: any) => void;
}

export type TModal = TModalOverlay & {
    children: ReactNode;
    title?: string;
}

export type TProfileNav = {
    text: string
}

export type TProtectedRoute = {
    element: React.ReactElement
}

export type TNavItem = {
    text: string
    link: string
    children?: ReactNode;
}

export type TIngredientList = {
    setActiveTab: (tab: string) => void
}

export type TNutritionInfoItem = {
    title: string
    value: number
}

export type TConstructorItem = {
    item: TIngredient
    index: number
}

export type TIngredientCard = {
    item: TIngredientData
}

export type TResetPassword = {
    password: string
    token: string
}

export type TLogin = {
    email: string
    password: string
}

export type TProfile = {
    name: string
    email: string
    password: string
}

export type TOrder = {
    _id: string;
    ingredients: string[];
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
};

export type TGetOrdersResponse = {
    success: boolean;
    orders: TOrder[];
    total: number;
    totalToday: number;
}

export type TWSOrderActions = {
    wsInit: typeof WS_CONNECTION_START,
    onOpen: typeof WS_CONNECTION_SUCCESS,
    onClose: typeof WS_CONNECTION_CLOSED,
    onError: typeof WS_CONNECTION_ERROR,
    onOrders: typeof WS_GET_ORDERS,
    onSendOrders: typeof WS_SEND_ORDER,
}
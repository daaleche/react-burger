import { ReactNode } from "react";

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
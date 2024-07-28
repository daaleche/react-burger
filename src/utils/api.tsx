import { TLogin, TProfile, TResetPassword } from '../types';
import { BASE_URL } from './constants'
import { getCookie } from './utils'

export const checkResponse = (res: Response) => {
    return res.ok
        ? res.json()
        : res.json().then((err) => Promise.reject(err));
};

function request(url: RequestInfo | URL, options?: RequestInit) {
    return fetch(url, options).then(checkResponse)
}

export const getIngredientsRequest = () => {
    return request(`${BASE_URL}/ingredients`)
}

export const postOrderRequest = (ingredients: Array<string>) => {
    return request(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": getCookie('accessToken'),
        },
        body: JSON.stringify({ ingredients })
    })
}

export const forgotPasswordRequestApi = (email: string) => {
    return request(`${BASE_URL}/password-reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    })
}

export const resetPasswordRequestApi = (data: TResetPassword) => {
    return request(`${BASE_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const loginApi = (data: TLogin) => {
    return request(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const registerApi = (data: TProfile) => {
    return request(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const getUserApi = () => {
    return request(`${BASE_URL}/auth/user`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": getCookie('accessToken')
        }
    })
}

export const updateUserApi = (data: TProfile) => {
    return request(`${BASE_URL}/auth/user`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Authorization": getCookie('accessToken')
        },
        body: JSON.stringify(data)
    })
}

export const refreshTokenApi = () => {
    return request(`${BASE_URL}/auth/token`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
    })
}

export const logoutApi = () => {
    return request(`${BASE_URL}/auth/token`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
    })
}

export function getOrderByNumber(number: string) {
    return request(`${BASE_URL}/orders/` + number)
}
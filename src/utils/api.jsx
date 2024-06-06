import { BASE_URL } from './constants'

export const checkReponse = (res) => {
    return res.ok
        ? res.json()
        : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsRequest = () => {
    return fetch(`${BASE_URL}/ingredients`)
        .then(checkReponse)
}

export const postOrderRequest = (ingredients) => {
    return fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ingredients })
    })
        .then(checkReponse)
}
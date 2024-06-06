import { BASE_URL } from './constants'

export const checkResponse = (res) => {
    return res.ok
        ? res.json()
        : res.json().then((err) => Promise.reject(err));
};

function request(url, options) {
    return fetch(url, options).then(checkResponse)
}

export const getIngredientsRequest = () => {
    return request(`${BASE_URL}/ingredients`)
}

export const postOrderRequest = (ingredients) => {
    return request(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ingredients })
    })
}
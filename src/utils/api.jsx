import { BASE_URL } from './constants'

export const checkReponse = (res) => {
    return res.ok
        ? res.json()
        : res.json().then((err) => Promise.reject(err));
};

export const getIngredients = () => {
    return fetch(`${BASE_URL}/ingredients`)
        .then(checkReponse)
}
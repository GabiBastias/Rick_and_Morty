import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, ALL_CHARACTERS } from "./action-types"
import axios from "axios";

export const addFav = (character) => {
    const endpoint = '/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character)
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            return {error: error.message}
        }
    };
};

export const removeFav = (id) => {
    const endpoint = `/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(endpoint)
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            return {error: error.message}
        }
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

export const allCharacters = () => {
    return {
        type: ALL_CHARACTERS
    }
}
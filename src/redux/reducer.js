import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            const updatedFavorites = state.myFavorites.filter((character) => character.id !== action.payload);
            return {
                ...state,
                myFavorites: updatedFavorites
            }
        case FILTER:
            const characterFiltered = state.allCharacters.filter((character) => character.gender === action.payload);
            return {
                ...state,
                myFavorites: characterFiltered
            }
        case ORDER:
            const characterOrdered = [...state.allCharacters];
            if (action.payload === "A") {
                characterOrdered.sort((a,b) => a.id - b.id)
            } else if (action.payload === "D"){
                characterOrdered.sort((a,b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: characterOrdered
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;
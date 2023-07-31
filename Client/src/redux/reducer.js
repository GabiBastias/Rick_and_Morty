import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, ALL_CHARACTERS } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state, 
                myFavorites: action.payload,
                allCharacters : action.payload
            }
        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case FILTER:
            const characterFiltered = state.allCharacters.filter((character) => character.gender === action.payload);
            return {
                ...state,
                myFavorites: characterFiltered
            }
        case ORDER:
            const characterOrdered = [...state.myFavorites];
            if (action.payload === "A") {
                characterOrdered.sort((a,b) => a.id - b.id)
            } else if (action.payload === "D"){
                characterOrdered.sort((a,b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: characterOrdered
            }
        case ALL_CHARACTERS:
            return{
                ...state,
                myFavorites: state.allCharacters
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;
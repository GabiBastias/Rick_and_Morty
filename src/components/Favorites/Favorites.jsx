import { connect } from "react-redux"
import Cards from "../Cards/Cards"
import {useDispatch} from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({myFavorites, onClose}) => {

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        if (aux) {
            setAux(false);
        } else {
            setAux(true);
        }
    }

    const handleFilter = (event) => {
        if (event.target.value === "allCharacters") {
            dispatch(orderCards("A"));
        } else {
            dispatch(filterCards(event.target.value));
        }
    }


    return(
        <div>
            <h2>My Favorites</h2>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="allCharacters">All Characters</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <Cards characters={myFavorites} onClose={onClose}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);
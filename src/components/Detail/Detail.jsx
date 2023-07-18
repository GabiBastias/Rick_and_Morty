import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from "./detail.module.css"

export default function Detail (){

    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    return(
        <div className={style.divDetail}>
            <div className={style.divNameImg}>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name}></img>
            </div>
            {
                character ? (
                    <div className={style.divCharacter}>
                        <h3>Status: {character.status}</h3>
                        <h3>Species: {character.species}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Origin: {character.origin?.name}</h3>
                        <h3>Location: {character.location?.name}</h3>
                    </div>
                ) : (" ")
            }
        </div>
    )
}
import { useState } from "react";
import styles from "./searchBar.module.css"
// import { NavLink } from "react-router-dom";

export default function SearchBar(props) {
   const [id, setId] = useState("");

   const handleChange = (event) =>{
      setId(event.target.value);
   }
   let randomNumber = Math.floor(Math.random()*826)+1;
   const handleEnter = (event) => {
      if(event.key === 'Enter'){
         onSearch(id);
         setId('');
      }
   }

   const {onSearch} = props;
   const {onRandom} = props;
   return (
      <div className={styles.searchBar}>
         <input
         className={styles.inputBar}
         onChange={handleChange}
         onKeyDown={handleEnter}
         //Conectamos el estado local
         value={id}
         />
         <button className={styles.buttonAdd} onClick={()=>onSearch(id)}>Search</button>
         <button className={styles.buttonRandom} onClick={()=>onRandom(randomNumber)}>Random</button>
      </div>
   );
}
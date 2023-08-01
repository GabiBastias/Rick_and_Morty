import styles from "./card.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions"; 
import { useState, useEffect } from "react";


const Card = ({id, name, status, species, gender, origin, image, onClose }) => {
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector(state => state.myFavorites);
   const dispatch = useDispatch();

   const {pathname} = useLocation();

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav({id, name, status, species, gender, origin, image, onClose}));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);
   
   return (
      <div className={styles.listItem}>
         <img src={image} alt={name} />
         {
            isFav ? 
            (<button onClick={handleFavorite} className={styles.favOn}>❤️</button>) 
            : 
            (<button onClick={handleFavorite} className={styles.favOn}>🤍</button>)
         }
         {
            pathname !== "/favorites" ?
            <button className={styles.buttonClose} onClick={()=>{onClose(id)}}>X</button>
            : null
         }
         <NavLink to={`/detail/${id}`} className={styles.nameDiv} >
            <h2 className={styles.name}>{name}</h2>
         </NavLink>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
      </div>
   );
}


export default Card;


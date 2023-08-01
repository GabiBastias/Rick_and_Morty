import styles from "./card.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions"; 
import { useState, useEffect } from "react";


const Card = ({id, name, status, species, gender, origin, image, onClose, removeFav, addFav, myFavorites}) => {
   
   const [isFav, setIsFav] = useState(false);

   const {pathname} = useLocation();
   console.log(pathname);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image, onClose});
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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);


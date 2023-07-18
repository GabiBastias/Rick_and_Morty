import styles from "./card.module.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
   const {onClose, name, status, species, gender, origin, image, id} = props;
   return (
      <div className={styles.listItem}>
         <img src={image} alt={name} />
         <button onClick={()=>{onClose(id)}}>X</button>
         <NavLink to={`/detail/${id}`} className={styles.nameDiv} >
         {/* className={(isActive) => isActive ? styles.activeDiv : styles.disableDiv} */}
            <h2 className={styles.name}>{name}</h2>
         </NavLink>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}

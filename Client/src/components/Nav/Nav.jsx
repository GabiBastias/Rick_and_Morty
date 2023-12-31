import SearchBar from "../SearchBar/SearchBar"
import styles from "./nav.module.css"
import { NavLink } from "react-router-dom";
import logo from "../../img/Rick & Morty Logo1.png"

export default function Nav(props){
    const {onSearch} = props;
    return <div className={styles.divNav}>
        <NavLink to="/home" className={styles.navLinkImg}>
            <img src={logo} alt="" className={styles.logoImg} />
        </NavLink>
        <NavLink to="/home"className={styles.navLinkHome}>
            <button className={styles.activeHome}>Home</button>
        </NavLink>
        <NavLink to="/about" className={styles.navLinkAbout}>
            <button className={styles.activeAbout}>About</button>
        </NavLink>
        <NavLink to="/favorites" className={styles.navLinkFavorites}>
            <button className={styles.activeFavorites}>Favorites</button>
        </NavLink>

        <SearchBar className={styles.searchBar} onSearch={onSearch}/>
    </div>
}
import styles from "./about.module.css"
import js from "../../img/js.png"
import html5 from "../../img/html-5.png"
import css3 from "../../img/css-3.png"
import nodejs from "../../img/nodejs.png"
import redux from "../../img/icons8-react-js-500.png"
import aboutImg from "../../img/AboutIMG.jpg"

export default function About (){

    return(
        <div className={styles.divAbout}>
            <h2>About me...</h2>
            <div className={styles.divItems}>
                <div className={styles.divP}>
                    <p className={styles.paragraph}>Hi, my name is Federico Gabriel Bastias Cano, beginner developer, I am currently studying at Soy Henry bootcamp. I am a normal guy living in Tupungato Mendoza, province of Argentina, completely passionate about technology since I can remember. I am characterized by a responsible and dedicated behavior, when I have something in mind I persevere to achieve it and get the most out of it. My other passions are soccer (River Plate fan) and good music, nothing in particular.
    This is a project given to students to learn how APIs make requests to the server and how they send information. This project is currently in the initial period (front-end), when this progress I will show you the back-end, but for now I am sharing a photo of myself and some technologies used in the project.I invite you to send me your comments to my contact networks. Thank you very much for visiting my site :)</p>
                </div>
                <div className={styles.aboutProfile}>
                    <img src={aboutImg} alt="Federico Gabriel Bastias Cano" />
                </div>
                <div className={styles.divBIS}>
                    <h3>Background Image Sources</h3>
                    <a href="https://wall.alphacoders.com/by_sub_category.php?id=233584&name=Rick+y+Morty+Fondos+de+pantalla&lang=Spanish" target="_blank" rel="noreferrer noopener">WALLPAPER

ABYSS</a>
<h4>Autors</h4>
<p>norman</p>
<p>Sparky8571</p>
<p>xGhostx</p>
                </div>
                <div className={styles.divImg}>
                    <h3>Used technologies: </h3>
                    <a href="https://www.flaticon.es/iconos-gratis/javascript" target="_blank" rel="noreferrer noopener">
                        <img src={js} alt="JavaScript" />
                    </a>
                    <a href="https://www.flaticon.es/iconos-gratis/html-5" target="_blank" rel="noreferrer noopener">
                        <img src={html5} alt="HTML" />
                    </a>
                    <a href="https://www.flaticon.es/iconos-gratis/css-3" target="_blank" rel="noreferrer noopener">
                        <img src={css3} alt="CSS" />
                    </a>
                    <a href="https://www.flaticon.es/iconos-gratis/nodejs" target="_blank" rel="noreferrer noopener">
                        <img src={nodejs} alt="NodeJS" />
                    </a>
                    <a href="https://icons8.com/icon/8g6WJkjf0vaP/react" target="_blank" rel="noreferrer noopener">
                        <img src={redux} alt="ReactJS" />
                    </a>
                </div>
            </div>
        </div>
    )
}
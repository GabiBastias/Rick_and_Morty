import styles from "./form.module.css"
import { useState } from "react";
import validation from "./validation"

export default function Form({login}){

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });


    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserData({email: "", password: ""});
        login(userData);
    }


    return(
        <div className={styles.divForm}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={styles.label}>Email: </label>
                    <input 
                        className={styles.input}
                        name="email" 
                        value={userData.email} 
                        onChange={handleChange}
                        />
                        <br/>
                        {
                            errors.email ? (
                                <span className={styles.spanInput}>{errors.email}</span>
                            ) : ("")
                        }
                </div>
                <div>
                    <label className={styles.label}>Password: </label>
                    <input
                        className={styles.input}
                        type="password" 
                        name="password" 
                        value={userData.password} 
                        onChange={handleChange}
                        />
                        <br/>
                        {
                            errors.password ? (
                                <span className={styles.spanInput}>{errors.password}</span>
                            ) : ("")
                        }

                </div>
                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>
    )
}
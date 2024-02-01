import React from 'react'
import styles from './Home.module.css';
import { Link } from 'react-router-dom'

function Home() {
return (
    <div>
        <h1 className={styles.tag}>Welcome to the Stories</h1>
        <div className={styles.inputBox}>
            <input type="text" placeholder="Username" className={styles.input} />
            <input type="password" placeholder="Password" className={styles.input} />
        </div>
        <div className={styles.buttons}>
            <Link to={"/login"}><button className={styles.loginButton}>Login</button></Link>
            <Link to={"/signup"}><button className={styles.signupButton}>Sign Up</button></Link>
            <Link><button className={styles.loginButton}>Entity</button></Link>
        </div>
    </div>
)
}
export default Home

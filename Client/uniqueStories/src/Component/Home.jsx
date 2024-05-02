import React from 'react'
import styles from './Home.module.css';


function Home() {
return (
    <div>
        <h1 className={styles.tag}>Welcome to the Stories</h1>
        <div className={styles.inputBox}>
        </div>
        <div className={styles.buttons}>
            <button className={styles.loginButton}>Login</button>
            <button className={styles.signupButton}>Sign Up</button>
            <button className={styles.loginButton}>ADD STORY</button>
            <button className={styles.loginButton}>Browse Stories</button>

        </div>
    </div>
)
}
export default Home

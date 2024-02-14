import React from 'react'
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
return (
    <div>
        <h1 className={styles.tag}>Welcome to the Stories</h1>
        <div className={styles.inputBox}>
        </div>
        <div className={styles.buttons}>
            <Link to={"/login"}><button className={styles.loginButton}>Login</button></Link>
            <Link to={"/singup"}><button className={styles.signupButton}>Sign Up</button></Link>
            <Link to={"/AddStory"}><button className={styles.loginButton}>ADD STORY</button></Link>
            <Link to={"/BrowseStories"}><button className={styles.loginButton}>Browse Stories</button></Link>

        </div>
    </div>
)
}
export default Home

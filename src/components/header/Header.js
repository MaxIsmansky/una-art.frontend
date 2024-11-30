import React from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/" className={styles.logoLink}>
                    Una art
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link to="/" className={styles.navLink}>Главная</Link>
                <Link to="/shop" className={styles.navLink}>Магазин</Link>
                <Link to="/about" className={styles.navLink}>О нас</Link>
                <Link to="/contacts" className={styles.navLink}>Контакты</Link>
            </nav>
        </header>
    );
};


export default Header;
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Хендмейд с душой</div>
            <nav className={styles.nav}>
                <a href="/" className={styles.navLink}>Главная</a>
                <a href="/shop" className={styles.navLink}>Магазин</a>
                <a href="/about" className={styles.navLink}>О нас</a>
                <a href="/contact" className={styles.navLink}>Контакты</a>
            </nav>
        </header>
    );
};

export default Header;
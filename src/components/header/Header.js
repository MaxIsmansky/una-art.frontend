import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
    const hideMenuTimeout = useRef(null);

    const handleMouseEnter = () => {
        if (hideMenuTimeout.current) {
            clearTimeout(hideMenuTimeout.current);
        }
        setIsShopMenuOpen(true);
    };

    const handleMouseLeave = () => {
        hideMenuTimeout.current = setTimeout(() => {
            setIsShopMenuOpen(false);
        }, 250); // Adjust delay as needed
    };

    useEffect(() => {
        return () => {
            if (hideMenuTimeout.current) {
                clearTimeout(hideMenuTimeout.current);
            }
        };
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/" className={styles.logoLink}>
                    Una art
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link to="/" className={styles.navLink}>Главная</Link>
                <div
                    className={styles.navItem}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/shop" className={styles.navLink}>Магазин</Link>
                    {isShopMenuOpen && (
                        <div className={styles.dropdownMenu}>
                            <Link to="/shop/paintings" className={styles.dropdownItem}>
                                Картины
                            </Link>
                            <Link to="/shop/sculptures" className={styles.dropdownItem}>
                                Скульптуры
                            </Link>
                            <Link to="/shop/accessories" className={styles.dropdownItem}>
                                Аксессуары
                            </Link>
                        </div>
                    )}
                </div>
                <Link to="/about" className={styles.navLink}>О нас</Link>
                <Link to="/contacts" className={styles.navLink}>Контакты</Link>
            </nav>
        </header>
    );
};

export default Header;

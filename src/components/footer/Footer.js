import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a href="/privacy" className={styles.footerLink}>Политика конфиденциальности</a>
                <a href="/terms" className={styles.footerLink}>Условия использования</a>
            </div>
            <p className={styles.copyright}>
                &copy; 2024 Хендмейд с душой. Все права защищены.
            </p>
        </footer>
    );
};

export default Footer;
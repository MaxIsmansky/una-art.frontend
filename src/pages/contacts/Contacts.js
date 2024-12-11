import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <h1>Контакты</h1>
            <p className={styles.description}>
                Мы всегда рады помочь и ответить на ваши вопросы. Свяжитесь с нами любым удобным способом!
            </p>
            <div className={styles.info}>
                <h2>Связаться с нами</h2>
                <p>Телефон: <a href="tel:+1234567890" className={styles.link}>+1 234 567 890</a></p>
                <p>Email: <a href="mailto:support@example.com" className={styles.link}>support@example.com</a></p>
            </div>
            <div className={styles.social}>
                <h2>Социальные сети</h2>
                <p>
                    Telegram: <a href="https://t.me/ammonit_una" className={styles.link}>@ammonit_una</a>
                </p>
                <p>
                    Telegram: <a href="https://t.me/ismansky_maxim" className={styles.link}>@ismansky_maxim</a>
                </p>
            </div>
            <div className={styles.location}>
                <h2>Наш адрес</h2>
                <p>12345, Город Примеров, улица Искусства, дом 10</p>
            </div>
        </div>
    );
};

export default Contacts;
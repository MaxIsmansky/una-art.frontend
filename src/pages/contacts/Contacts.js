import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <h1>Контакты</h1>
            <p>Свяжитесь с нами через Telegram:</p>
            <ul className={styles.contactList}>
                <li>
                    <a
                        href="https://t.me/ammonit_una"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                    >
                        @ammonit_una
                    </a>
                </li>
                <li>
                    <a
                        href="https://t.me/ismansky_maxim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                    >
                        @ismansky_maxim
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contacts;
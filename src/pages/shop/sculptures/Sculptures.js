import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sculptures.module.css';

const Sculptures = () => {
    // Моковые данные для скульптур
    const sculptures = [
        { id: 1, name: 'Скульптура "Совершенство"', price: '7 500 ₽', image: 'https://via.placeholder.com/300' },
        { id: 2, name: 'Скульптура "Гармония"', price: '8 000 ₽', image: 'https://via.placeholder.com/300' },
    ];

    return (
        <div className={styles.sculptures}>
            <h1>Скульптуры</h1>
            <div className={styles.gallery}>
                {sculptures.map((sculpture) => (
                    <Link
                        key={sculpture.id}
                        to={`/shop/sculptures/${sculpture.id}`}
                        className={styles.card}
                    >
                        <img
                            src={sculpture.image}
                            alt={sculpture.name}
                            className={styles.image}
                        />
                        <div className={styles.info}>
                            <h2 className={styles.name}>{sculpture.name}</h2>
                            <p className={styles.price}>{sculpture.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sculptures;

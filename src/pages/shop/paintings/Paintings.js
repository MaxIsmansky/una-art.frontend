import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Paintings.module.css';

const Paintings = () => {
    const paintings = [
        { id: 1, name: 'Утро в лесу', price: '3000 ₽', image: 'https://via.placeholder.com/300' },
        { id: 2, name: 'Закат на море', price: '4000 ₽', image: 'https://via.placeholder.com/300' },
        { id: 3, name: 'Зимняя сказка', price: '3500 ₽', image: 'https://via.placeholder.com/300' },
    ];

    return (
        <div className={styles.paintings}>
            <h1>Картины</h1>
            <div className={styles.gallery}>
                {paintings.map((painting) => (
                    <Link
                        key={painting.id}
                        to={`/shop/paintings/${painting.id}`}
                        className={styles.card}
                    >
                        <img
                            src={painting.image}
                            alt={painting.name}
                            className={styles.image}
                        />
                        <div className={styles.info}>
                            <h2 className={styles.name}>{painting.name}</h2>
                            <p className={styles.price}>{painting.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Paintings;

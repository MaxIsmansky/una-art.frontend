import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Accessories.module.css';

const Accessories = () => {
    // Моковые данные для аксессуаров
    const accessories = [
        { id: 1, name: 'Кулон "Лесной"', price: '2 500 ₽', image: 'https://via.placeholder.com/300' },
        { id: 2, name: 'Браслет "Морской бриз"', price: '3 000 ₽', image: 'https://via.placeholder.com/300' },
        { id: 3, name: 'Кулон "Мох дышит"', price: '480 ₽', image: '/assets/img.png' },
    ];

    return (
        <div className={styles.accessories}>
            <h1>Аксессуары</h1>
            <div className={styles.gallery}>
                {accessories.map((accessory) => (
                    <Link
                        key={accessory.id}
                        to={`/shop/accessories/${accessory.id}`}
                        className={styles.card}
                    >
                        <img
                            src={accessory.image}
                            alt={accessory.name}
                            className={styles.image}
                        />
                        <div className={styles.info}>
                            <h2 className={styles.name}>{accessory.name}</h2>
                            <p className={styles.price}>{accessory.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Accessories;

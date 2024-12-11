import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Shop.module.css';

const Shop = () => {
    const categories = [
        { name: 'Картины', image: 'https://via.placeholder.com/300', link: '/shop/paintings' },
        { name: 'Скульптуры', image: 'https://via.placeholder.com/300', link: '/shop/sculptures' },
        { name: 'Аксессуары', image: 'https://via.placeholder.com/300', link: '/shop/accessories' },
    ];

    return (
        <div className={styles.shop}>
            <h1>Магазин</h1>
            <p className={styles.description}>
                Исследуйте наши уникальные коллекции. Каждый товар создан с любовью и вниманием к деталям.
            </p>
            <div className={styles.categories}>
                {categories.map((category, index) => (
                    <Link key={index} to={category.link} className={styles.card}>
                        <img src={category.image} alt={category.name} className={styles.image} />
                        <h2>{category.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Shop;

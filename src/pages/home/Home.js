import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <header className={styles.homeHeader}>
                <h1>Una Art</h1>
                <p>Эксклюзивные картины и изделия ручной работы</p>
            </header>
            <section className={styles.featuredItems}>
                <h2>Популярные товары</h2>
                <div className={styles.itemsGrid}>
                    <div className={styles.itemCard}>
                        <img src="https://via.placeholder.com/150" alt="Картина" />
                        <h3>Картина "Закат"</h3>
                        <p>5 000 ₽</p>
                    </div>
                    <div className={styles.itemCard}>
                        <img src="https://via.placeholder.com/150" alt="Скульптура" />
                        <h3>Скульптура "Совершенство"</h3>
                        <p>7 500 ₽</p>
                    </div>
                    <div className={styles.itemCard}>
                        <img src="https://via.placeholder.com/150" alt="Поделка" />
                        <h3>Деревянная поделка</h3>
                        <p>3 000 ₽</p>
                    </div>
                </div>
            </section>
            <section className={styles.aboutUs}>
                <h2>О нас</h2>
                <p>
                    Мы создаем уникальные произведения искусства, вдохновленные природой и культурой.
                    Каждая вещь сделана вручную с любовью и вниманием к деталям.
                </p>
            </section>
        </div>
    );
};

export default Home;

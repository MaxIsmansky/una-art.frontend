import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    const products = [
        { id: 1, name: 'Картина "Закат"', price: '5 000 ₽', image: '/assets/300x300.png' },
        { id: 2, name: 'Скульптура "Совершенство"', price: '7 500 ₽', image: '/assets/300x300.png' },
        { id: 3, name: 'Деревянная поделка', price: '3 000 ₽', image: '/assets/300x300.png' },
    ];

    return (
        <div className={styles.home}>
            {/* Секция героя */}
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>Уникальные хендмейд вещи</h1>
                <p className={styles.heroSubtitle}>Искусство, созданное с любовью.</p>
            </section>

            {/* Секция продуктов */}
            <section className={styles.productsSection}>
                <h2 className={styles.sectionTitle}>Популярные товары</h2>
                <div className={styles.productsGrid}>
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            to={`/shop/paintings/${product.id}`} // Измените на соответствующий маршрут
                            className={styles.productCard}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className={styles.productImage}
                            />
                            <div className={styles.productInfo}>
                                <h3 className={styles.productTitle}>{product.name}</h3>
                                <p className={styles.productPrice}>{product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Секция преимуществ */}
            <section className={styles.benefitsSection}>
                <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
                <div className={styles.benefitsGrid}>
                    <div className={styles.benefitCard}>
                        <h3>Уникальность</h3>
                        <p>Каждое изделие — это искусство, созданное вручную.</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <h3>Качество</h3>
                        <p>Мы используем только лучшие материалы для ваших вещей.</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <h3>Эксклюзивность</h3>
                        <p>Ограниченные тиражи — это всегда уникальный подарок.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

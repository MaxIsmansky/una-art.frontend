import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            {/* Секция героя */}
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>Уникальные хендмейд вещи</h1>
                <p className={styles.heroSubtitle}>
                    Искусство, созданное с любовью.
                </p>
                <button className={styles.heroButton}>Узнать больше</button>
            </section>

            {/* Секция продуктов */}
            <section className={styles.productsSection}>
                <h2 className={styles.sectionTitle}>Популярные товары</h2>
                <div className={styles.productsGrid}>
                    <div className={styles.productCard}>
                        <img src="https://via.placeholder.com/300" alt="Продукт 1" className={styles.productImage} />
                        <h3 className={styles.productTitle}>Картина "Закат"</h3>
                        <p className={styles.productPrice}>5 000 ₽</p>
                    </div>
                    <div className={styles.productCard}>
                        <img src="https://via.placeholder.com/300" alt="Продукт 2" className={styles.productImage} />
                        <h3 className={styles.productTitle}>Скульптура "Совершенство"</h3>
                        <p className={styles.productPrice}>7 500 ₽</p>
                    </div>
                    <div className={styles.productCard}>
                        <img src="https://via.placeholder.com/300" alt="Продукт 3" className={styles.productImage} />
                        <h3 className={styles.productTitle}>Деревянная поделка</h3>
                        <p className={styles.productPrice}>3 000 ₽</p>
                    </div>
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
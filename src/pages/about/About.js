import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <h1>О нас</h1>
            <p className={styles.description}>
                Мы вдохновляемся природой, искусством и культурой, чтобы создавать уникальные хендмейд изделия.
                Каждая вещь, представленная на нашем сайте, сделана с любовью, вниманием к деталям и стремлением к совершенству.
            </p>
            <div className={styles.mission}>
                <h2>Наша миссия</h2>
                <p>
                    Поддерживать мастерство ручной работы, вдохновлять людей через искусство и дарить радость с каждым изделием.
                </p>
            </div>
            <div className={styles.team}>
                <h2>Об авторе работ</h2>
                <p>
                    Una
                </p>
            </div>
        </div>
    );
};

export default About;

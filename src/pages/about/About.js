import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <h1>О нас</h1>
            <p className={styles.description}>
                Мы вдохновляемся природой, искусством и культурой, чтобы создавать уникальные хендмейд изделия.
                Каждая вещь на нашем сайте — это воплощение любви, внимания к деталям и стремления к совершенству.
            </p>
            <div className={styles.mission}>
                <h2>Наша миссия</h2>
                <p>
                    Поддерживать мастерство ручной работы, вдохновлять людей через искусство
                    и дарить радость с каждым изделием.
                </p>
            </div>
            <div className={styles.team}>
                <h2>Об авторе</h2>
                <p>Una — руководитель творческой мастерской, создающей работы, которые отражают душу и вдохновение.</p>
                <div className={styles.photo}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Una - автор и руководитель"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

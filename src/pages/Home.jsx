import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';

const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const cardAll = await axios.get(
                    'http://localhost:3005/products'
                );

                setCards(cardAll.data);
            } catch (error) {
                console.log('ошибка при запросе данных');
            }
        }
        fetchData();
    }, []);

    return (
        <main>
            <section className="content">
                <div className="container">
                    {cards.map((card, index) => {
                        return (
                            <>
                                <h2
                                    className="content__title"
                                    key={index}
                                >
                                    {card.chapter}
                                </h2>
                                <div className="content__wrapper">
                                    {card?.items?.map((item) => {
                                        return (
                                            <Card
                                                key={item.id}
                                                {...item}
                                            />
                                        );
                                    })}
                                </div>
                            </>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Home;

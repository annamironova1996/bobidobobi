import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchCards,
    selectCardSliceItems,
    selectCardSliceStatus,
} from '../redux/slices/cardsSlice';
import Card from '../components/Card';
import SimpleSwiper from '../components/SimpleSwiper';
import Menu from '../components/Menu';

export const HomeContext = React.createContext();

const Home = () => {
    const dispatch = useDispatch();
    const cards = useSelector(selectCardSliceItems);
    const status = useSelector(selectCardSliceStatus);

    useEffect(() => {
        const fetchData = () => {
            dispatch(fetchCards());
        };
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <HomeContext.Provider value={{ cards }}>
            <main>
                <Menu />

                <SimpleSwiper />
                <section className="content">
                    <div className="container">
                        {status === 'error' ? (
                            <div>
                                Произошла ошибка, вернитесь к нам через пару
                                минут, мы уже все исправляем
                            </div>
                        ) : (
                            cards.map((card, index) => {
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
                            })
                        )}
                    </div>
                </section>
            </main>
        </HomeContext.Provider>
    );
};

export default Home;

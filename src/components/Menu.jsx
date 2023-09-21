import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from './Search';
import { selectCartSlice } from '../redux/slices/cartSlice';

const Menu = () => {
    const { items, totalPrice } = useSelector(selectCartSlice);

    const totalCount = items.reduce((sum, item) => {
        return item.count + sum;
    }, 0);

    return (
        <section>
            <div className="container">
                <div className="menu">
                    <ul className="menu__main">
                        <li>Наборы</li>
                        <li>Ролы и суши</li>
                        <li>Премиум</li>
                        <li>Темпура</li>
                        <li>Запеченные</li>
                        <li>Горячее и салаты</li>
                        <li>Соусы</li>
                        <li>Напитки и десерты</li>
                    </ul>
                    <ul className="menu__delivery">
                        <li>
                            <Link to="stock">Акции</Link>
                        </li>
                        <li>
                            <Link to="delivery">Доставка и оплата</Link>
                        </li>
                    </ul>
                    <Search />
                    <Link
                        to="cart"
                        className="header__cart"
                    >
                        {totalCount}/{totalPrice}руб.
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Menu;

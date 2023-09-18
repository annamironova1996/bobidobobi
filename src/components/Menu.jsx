import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
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
                        <li>Акции</li>
                        <li>Доставка и оплата</li>
                    </ul>
                    <button className="menu__search">
                        <img
                            src="img/icons/search.svg"
                            alt="поиск"
                        />
                    </button>
                    <Link className="header__cart">Корзина</Link>
                </div>
            </div>
        </section>
    );
};

export default Menu;

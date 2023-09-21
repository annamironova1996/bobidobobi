import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundComponent = () => {
    return (
        <div className="not-found__wrapper">
            <img
                src="img/not-found.png"
                alt="суши"
            />
            <h2>Похоже, такой страницы не существует!</h2>
            <Link
                className="transparent-btn"
                to="/"
            >
                Вернуться на главную страницу
            </Link>
        </div>
    );
};

export default NotFoundComponent;

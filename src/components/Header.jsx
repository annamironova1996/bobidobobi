import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link
                        to="/"
                        className="logo"
                    >
                        <img
                            src=""
                            alt=""
                        />
                        <h1>Бобидобоби</h1>
                        <p>Sishi & Rolls</p>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

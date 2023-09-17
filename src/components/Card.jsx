import React from 'react';

const Card = ({ img, title, description, gram, price }) => {
    console.log(title);
    return (
        <article className="card">
            <img
                className="card__img"
                src={img}
                alt=""
            />
            <div className="card__row">
                <h3>{title}</h3>
                <span>{gram} г</span>
            </div>

            <p className="card__description">{description}</p>
            <div className="card__wrapper">
                <p>{price} ₽</p>
                <button className="content__button">Выбрать</button>
            </div>
        </article>
    );
};

export default Card;

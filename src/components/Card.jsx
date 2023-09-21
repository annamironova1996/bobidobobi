import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartSliceItemId } from '../redux/slices/cartSlice';

const Card = ({ id, img, title, description, gram, price }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartSliceItemId(id));

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            gram,
            img,
        };
        dispatch(addItem(item));
    };

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
                <button
                    onClick={onClickAdd}
                    className="transparent-btn"
                >
                    Выбрать {addedCount > 0 && <span>{addedCount}</span>}
                </button>
            </div>
        </article>
    );
};

export default Card;

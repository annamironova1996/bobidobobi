import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartSliceItemId } from '../redux/slices/cartSlice';

const CardSearch = ({ id, img, title, description, price, gram, count }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartSliceItemId(id));
    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            gram,
            count,
            img,
        };
        dispatch(addItem(item));
    };

    console.log(count);
    return (
        <article className="card-search">
            <img
                src={img}
                alt="фотография товара"
            />
            <div className="card-search__wrapper">
                <div className="card-search__row">
                    <h3>{title}</h3>
                    <span className="card-search__gram">{gram} г</span>
                </div>

                <p>{description}</p>
                <div className="card-search__row">
                    <span className="card-search__price">{price} ₽</span>
                    <button
                        onClick={onClickAdd}
                        type="button"
                        className="transparent-btn"
                    >
                        Добавить {addedCount > 0 && <span>{addedCount}</span>}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default CardSearch;

import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({ id, title, img, price, count }) => {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            })
        );
    };
    const onClickMinus = () => {
        dispatch(minusItem(id));
    };

    const onClickRemove = () => {
        dispatch(removeItem(id));
    };

    return (
        <article>
            <div>
                <img
                    width={100}
                    src={img}
                    alt="изображение продукта"
                />
                <h3>{title}</h3>
                <p>{price * count}</p>
                <button onClick={onClickMinus}>-</button>
                <span>{count}</span>
                <button onClick={onClickPlus}>+</button>
                <button onClick={onClickRemove}>Удалить товар</button>
            </div>
        </article>
    );
};

export default CartItem;

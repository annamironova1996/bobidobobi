import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearItems, selectCartSlice } from '../redux/slices/cartSlice';
import CartEmpty from '../components/CartEmpty';

const Cart = () => {
    const dispatch = useDispatch();
    const { totalPrice, items } = useSelector(selectCartSlice);

    const totalCount = items.reduce((sum, item) => {
        return item.count + sum;
    }, 0);

    const onClickClear = () => {
        dispatch(clearItems());
    };
    console.log(totalPrice);
    return (
        <section className="cart">
            <div className="container">
                {!totalCount ? (
                    <CartEmpty />
                ) : (
                    <>
                        {items.map((item) => {
                            console.log(items.img);
                            return (
                                <CartItem
                                    key={item.id}
                                    {...item}
                                />
                            );
                        })}
                        <button onClick={onClickClear}>Очистить корзину</button>
                        <p>Всего товаров: {totalCount}</p>
                        <p>Общая сумма: {totalPrice}</p>
                    </>
                )}
            </div>
            <Link to="..">Вернуться назад</Link>
        </section>
    );
};

export default Cart;

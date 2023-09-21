import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Delivery = () => {
    return (
        <section className="delivery">
            <div className="container">
                <Link
                    to=".."
                    className="transparent-btn"
                >
                    Вернуться на главную
                </Link>
                <h2>Доставка и оплата</h2>

                <div>
                    <h3 className="delivery__title">Адрес самовывоза</h3>
                    <address>ул. Кирова, 225</address>
                    <address>ул. Объединения 100/6, 2 этаж</address>
                    <ul className="delivery__time">
                        <li>График работы</li>
                        <li>ВС - ЧТ 11:00 - 23:00</li>
                        <li>ПТ - СБ 11:00 - 24:00</li>
                    </ul>
                </div>
                <div>
                    <h3 className="delivery__title">ВОЗВРАТ</h3>
                    <p>
                        В соответствии с законодательством РФ возврат
                        продовольственных товаров надлежащего качества не
                        допускается, возврат денежных средств за такой товар не
                        производится. В случае если клиент обнаружит, что ему
                        передан товар ненадлежащего качества, он вправе до
                        истечения срока годности возвратить товар ненадлежащего
                        качества продавцу и потребовать возврата уплаченной
                        денежной суммы, либо потребовать замены товара
                        ненадлежащего качества.
                    </p>
                </div>
                <div>
                    <h3 className="delivery__title">СПОСОБЫ ОПЛАТЫ</h3>
                    <img
                        src="img/logopay.webp"
                        alt="способы оплаты"
                    />
                    <h4 className="delivery__subtitle">
                        Наличный расчёт и безналичный расчет
                    </h4>
                    <p>
                        Если товар доставляется курьером, то оплата
                        осуществляется наличными курьеру в руки или банковской
                        картой с помощью мобильных банковских терминалов. При
                        получении товара обязательно проверьте комплектацию
                        товара и наличие чека.
                    </p>
                    <h4 className="delivery__subtitle">
                        Безопасность платежей
                    </h4>
                    <p>
                        Оплатить заказ можно с помощью банковских карт платёжных
                        систем Visa, MasterCard, МИР. При оплате банковской
                        картой безопасность платежей гарантирует процессинговый
                        центр
                        <NavLink
                            className="delivery__link"
                            to="https://best2pay.net/"
                        >
                            Best2Pay
                        </NavLink>{' '}
                        .
                    </p>
                    <p>
                        Приём платежей происходит через защищённое безопасное
                        соединение, используя протокол TLS 1.2. Компания
                        <NavLink
                            className="delivery__link"
                            to="https://best2pay.net/"
                        >
                            Best2Pay
                        </NavLink>
                        соответствует международным требованиями PCI DSS для
                        обеспечения безопасной обработки реквизитов банковской
                        карты плательщика. Ваши конфиденциальные данные
                        необходимые для оплаты (реквизиты карты, регистрационные
                        данные и др.) не поступают в Интернет-магазин, их
                        обработка производится на стороне процессингового центра
                        <NavLink
                            className="delivery__link"
                            to="https://best2pay.net/"
                        >
                            Best2Pay
                        </NavLink>
                        и полностью защищена. Никто, в том числе
                        интернет-магазин, не может получить банковские и
                        персональные данные плательщика.
                    </p>
                    <p>
                        При оплате заказа банковской картой возврат денежных
                        средств производится на ту же самую карту, с которой был
                        произведён платёж.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Delivery;

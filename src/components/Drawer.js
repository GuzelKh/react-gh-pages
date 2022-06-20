function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2>Корзина</h2>
                <div className="items">
                    <div className="cartItem">
                        <img width={100} height={100} src="/img/img1/11.jpg" alt="Jewellery" />
                        <div>
                            <p>Подвеска</p>
                            <b>Цена:5000руб.</b>
                            <img className="cartDel" width={30} height={30} src="/img/plus2.svg" alt="Remove" />
                        </div>
                    </div>
                    <div className="cartItem">
                        <img width={100} height={100} src="/img/img1/12.jpg" alt="Jewellery" />
                        <div>
                            <p>Кольцо</p>
                            <b>Цена:5000руб.</b>
                            <img className="cartDel" width={30} height={30} src="/img/plus2.svg" alt="Remove" />
                        </div>
                    </div>
                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Итого: </span>
                                <div></div>
                                <b>10000руб.</b>
                            </li>
                        </ul>
                        <button className="blueButton">Оформит заказ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
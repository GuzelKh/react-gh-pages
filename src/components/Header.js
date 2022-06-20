function Header() {
    return (
        <header>
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo11.png" alt="Jewellery" />
                <div className="nameSite">
                <h3>React Jewellery shop</h3>
                <p>Роскошная красота</p>
                </div>
            </div>
            <div>
                <ui className="headerRight">
                    <li>
                    <img width={30} height={30} src="/img/cart.png" alt="" />
                    <span>5000 руб</span>
                    </li>
                    <li>
                    <img width={30} height={30} src="/img/user.png" alt="" />
                    </li>
                </ui>
            </div>
        </header>
    );
}

export default Header;
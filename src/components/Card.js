function Card(props) {
    return (
        <div className="card">
            <div className="cardImg">
                <img width={210} height={210} src={props.imageUrl} alt="Jewellery" />
            </div>
            <h5>{props.title}</h5>
            <div className="cardButton">
            <div>
                <span>Цена:</span>
                <b>{props.prise}руб.</b>
            </div>
            <button>Купить</button>
            </div>
        </div>
    );
}

export default Card;

function Card( { coin}) {
    const isPositive = coin.price_change_24h >= 0;

    return (
        <div className="card">
            <div className="card-header">
                <img src= {coin.image} alt = {coin.name} />
                <div>
                    <h3>{coin.name}</h3>
                    <p className="symbol"> {coin.symbol.toUpperCase()}</p>
                </div>
            </div>

            <div className="crypto-body">
                <p className="price">${coin.current_price}</p>
                <p className={isPositive ? "change positive" : "change negative"}>
                {coin.price_change_percentage_24h?.toFixed(2)}%
                </p>
            </div>
        </div>
    );


}
export default Card;
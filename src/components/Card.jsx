import bull from '../assets/bull.svg';
import bear from '../assets/bear.svg';

function Card({ coin, onToggleWatchlist, isWatchlisted, isEditing }) {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <div className="card">
      <button
        className="watch-btn"
        onClick={() => onToggleWatchlist?.(coin)}
      >
        {isEditing ? "✕" : isWatchlisted ? "★" : "☆"}
      </button>

      <div className="card-header">
        <img src={coin.image} alt={coin.name} />

        <div>
          <h3 className="coin-name">{coin.name}</h3>
          <p className="symbol">{coin.symbol.toUpperCase()}</p>
        </div>
      </div>

      <div className="card-body">
        <p className="price">
          ${coin.current_price.toLocaleString()}
        </p>

        <p className={isPositive ? "change positive" : "change negative"}>
          {isPositive ? 
            <img src={bull} alt="Bull" className="icon" /> : 
            <img src={bear} alt="Bear" className="icon" />}{" "}
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export default Card;
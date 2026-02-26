import { useEffect, useState } from "react";
import { fetchCryptoData } from "./services/cryptoApi";

function App() {
  const [coins, setCoins] = useState([]);
  const [error, setError]  = useState("");

  useEffect(() => {
    loadcoins();
    const interval = setInterval(loadcoins,30000);
    return () => clearInterval(interval);
  },[]);

  const loadcoins = async() => {
    try {
      setError("");
      const data = await fetchCryptoData();
      setCoins(data);
    }catch (error){
      setError("Failed to load cryptocurrency data. Please try again later.");
    }
  };

  return (
    <div className="container">
      <h1>Crypto Pulse</h1> 
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {coins.map((coin) => (
        <div key={coin.id}>
          <h3>
            {coin.name}({coin.symbol.toUpperCase()})
          </h3>
          <p>{coin.current_price}</p>
          <p style = {{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          <hr />
        </div>
      ))}

    </div>

  );
}

export default App;



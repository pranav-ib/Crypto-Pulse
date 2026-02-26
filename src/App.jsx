import {  useEffect, useState } from "react";
import { fetchCryptoData } from "./services/cryptoApi";
import Card from "./components/Card";

function App() {
  const [coins, setCoins] = useState([]);
  const [error, setError]  = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadcoins();
    const interval = setInterval(loadcoins,30000);
    return () => clearInterval(interval);
  },[]);

  const loadcoins = async() => {
    try {
      setError("");
      setLoading(true);
      const data = await fetchCryptoData();
      setCoins(data);
    }catch (error){
      setError("Failed to load cryptocurrency data. Please try again later.");
    }
    finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="container">
      <h1>Crypto Pulse</h1> 
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {!loading && !error &&
        coins.map((coin) => (
          <Card key={coin.id} coin={coin} />
        ))
      } 
    </div>
  );
}

export default App;



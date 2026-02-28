import {  useEffect, useState } from "react";
import { fetchCryptoData } from "./services/cryptoApi";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [coins, setCoins] = useState([]);
  const [error, setError]  = useState("");
  const [loading, setLoading] = useState(true);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    loadcoins();

    const saved = localStorage.getItem("watchlist");
    if (saved) {
      try {
        setWatchlist(JSON.parse(saved));
      } catch {
        setWatchlist([]);
      }
    }

    const interval = setInterval(loadcoins, 30000);
    return () => clearInterval(interval);
  }, []);

    useEffect(() => {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }, [watchlist]);
    

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

  const toggleWatchlist = (coin) => {
    console.log("clicked", coin);
    setWatchlist((prev) => {
      const exists = prev.find((item) => item.id === coin.id);

      if (exists) {
        return prev.filter((item) => item.id !== coin.id);
      } else {
        return [...prev, coin];
      }
    });
  };


  return (
    <div className="container">
      <Navbar />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <h2 className="section-title">My Watchlist</h2>

      <div className="grid-layout">
        {watchlist.length === 0 && (
          <p className="status">No assets in watchlist.</p>
        )}

        {watchlist.map((coin) => (
          <Card
            key={coin.id}
            coin={coin}
            onToggleWatchlist={toggleWatchlist}
            isWatchlisted={true}
          />
        ))}
      </div>

      <div className="grid-layout">
        {!loading && !error &&
          coins.map((coin) => (
            <Card 
              key={coin.id} 
              coin={coin}
              onToggleWatchlist={toggleWatchlist}
              isWatchlisted={watchlist.some(item => item.id === coin.id)}
            />
          ))
        } 
      </div>
    </div>
  );
}

export default App;



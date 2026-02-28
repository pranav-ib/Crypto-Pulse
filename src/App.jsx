import { useEffect, useState, useRef } from "react";
import { fetchCryptoData } from "./services/cryptoApi";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import ApiWarning from "./components/ApiWarning";
import Watchlist from "./sections/Watchlist";

function App() {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [watchlist, setWatchlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditingWatchlist, setIsEditingWatchlist] = useState(false);
  const [showAllAssets, setShowAllAssets] = useState(false);

  const searchRef = useRef(null);

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

  const loadcoins = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await fetchCryptoData();
      setCoins(data);
    } catch (error) {
      setError("Real-time prices may be delayed by up to 30 seconds. Checking connection...");
    } finally {
      setLoading(false);
    }
  };

  const toggleWatchlist = (coin) => {
    setWatchlist((prev) => {
      const exists = prev.find((item) => item.id === coin.id);
      if (exists) {
        return prev.filter((item) => item.id !== coin.id);
      } else {
        return [...prev, coin];
      }
    });
  };

  const filteredCoins = coins.filter((coin) => {
    const query = searchQuery.trim().toLowerCase();
    return (
      coin.name.toLowerCase().includes(query) ||
      coin.symbol.toLowerCase().includes(query)
    );
  });

  const visibleCoins = showAllAssets ? filteredCoins : filteredCoins.slice(0, 8);

  return (
    <div className="container">
      <Navbar onSearch={setSearchQuery} searchRef={searchRef} />

      <ApiWarning
        message={error}
        onClose={() => setError("")}
      />

      <Watchlist
        watchlist={watchlist}
        toggleWatchlist={toggleWatchlist}
        onAddClick={() => searchRef.current?.focus()}
        isEditing={isEditingWatchlist}
        onToggleEdit={() => setIsEditingWatchlist(prev => !prev)}
      />

      <div className="market-header">
        <div>
          <h2 className="section-title">Market Overview</h2>
          <p className="section-caption">Real-time data for top performing assets</p>
        </div>

        <button
          className="all-assets-btn"
          onClick={() => setShowAllAssets((prev) => !prev)}
        >
          All Assets
        </button>
      </div>

      <div className="grid-layout">
        {!loading && !error &&
          visibleCoins.map((coin) => (
            <Card
              key={coin.id}
              coin={coin}
              onToggleWatchlist={toggleWatchlist}
              isWatchlisted={watchlist.some(item => item.id === coin.id)}
              isEditing={false}
            />
          ))
        }
      </div>

      <div className="view-all-wrapper">
        <button
          className="view-all-btn"
          onClick={() => setShowAllAssets(true)}
        >
          View All Cryptocurrencies
        </button>
      </div>
    </div>
  );
}

export default App;
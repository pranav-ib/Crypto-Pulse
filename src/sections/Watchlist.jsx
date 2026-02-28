import Card from "../components/Card";

function Watchlist({ watchlist, toggleWatchlist }) {
    return (
        <div>
            <h2 className="section-title">My Watchlist</h2>
            <p className="section-caption">Your personalized collection of assets</p>

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
        </div>
    );
}

export default Watchlist;
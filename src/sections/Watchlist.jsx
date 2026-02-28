import Card from "../components/Card";

function Watchlist({
  watchlist,
  toggleWatchlist,
  onAddClick,
  isEditing,
  onToggleEdit
}) {
  return (
    <div>
      <div className="watchlist-header">
        <div>
          <h2 className="section-title">My Watchlist</h2>
          <p className="section-caption">
            Your personalized collection of assets
          </p>
        </div>

        <button
          className="edit-list-btn"
          onClick={onToggleEdit}
        >
          {isEditing ? "Done" : "Edit List"}
        </button>
      </div>

      <div className="grid-layout">
        {watchlist.map((coin) => (
          <Card
            key={coin.id}
            coin={coin}
            onToggleWatchlist={toggleWatchlist}
            isWatchlisted={true}
            isEditing={isEditing}
          />
        ))}

        <button
          className="watchlist-empty clickable"
          onClick={onAddClick}
          type="button"
        >
          <div className="watchlist-empty-icon">＋</div>
          <p>Add asset to watchlist</p>
        </button>
      </div>
    </div>
  );
}

export default Watchlist;
import logo from "../assets/logo.svg";
import notify from "../assets/notify.svg";

function Navbar({ onSearch }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-left">
          <div className="logo">
            <h1 className="logo">
              <img src={logo} alt="CryptoPulse logo" className="logo-img" />
              <span className="white-text">Crypto</span>
              <span className="blue-text">Pulse</span>
            </h1>
          </div>

          <div className="nav-links">
            <a href="#market" className="nav-item">Market</a>
            <a href="#portfolio" className="nav-item">Portfolio</a>
            <a href="#exchange" className="nav-item">Exchange</a>
          </div>
        </div>

        <div className="nav-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search assets..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        <div className="notification-button">
          <img src={notify} alt="Notification bell" className="notification-bell" />
        </div>
          <a href="/profile" className="profile-avatar">JD</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
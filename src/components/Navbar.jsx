import { useState } from "react";
import logo from "../assets/logo.svg";
import notify from "../assets/notify.svg";
import search from "../assets/search.svg";

function Navbar({ onSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

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
              onChange={handleSearch}
            />
          </div>
          <div className="notification-button">
            <img src={notify} alt="Notification bell" className="notification-bell" />
          </div>
          <a href="/profile" className="profile-avatar">JD</a>
        </div>

        {/* Mobile Controls Wrapper */}
        <div className="mobile-controls">
          <button 
            className="mobile-search-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <img src={search} alt="Search" className="search-icon" />
          </button>

          <button
            className="hamburger-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? "active" : ""}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? "active" : ""}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? "active" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#market" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Market</a>
          <a href="#portfolio" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#exchange" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Exchange</a>
          <a href="/profile" className="mobile-nav-item profile" onClick={() => setMobileMenuOpen(false)}>Profile</a>
        </div>
      )}

      {/* Mobile Search Popup */}
      {searchOpen && (
        <div className="mobile-search-popup">
          <input
            type="text"
            placeholder="Search assets..."
            onChange={handleSearch}
            autoFocus
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
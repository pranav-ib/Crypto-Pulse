function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="nav-left">
                    <div className="logo">
                        <h1>
                            <span className="blue-text"></span>
                            <span className="white-text">Crypto</span>
                            <span className="blue-text">Pulse</span> 
                        </h1> 
                    </div>
                    <div className="nav-links">
                        <a href="#market"  className="nav-item">Market</a>
                        <a href="#portfolio" className="nav-item">Portfolio</a>
                        <a href="#exchange" className="nav-item">Exchange</a>
                    </div>
                </div>

                <div className="nav-actions">
                    <div className="search-container">
                    <input type="text" placeholder="Search assets..." />
                    </div>
                    <div className="notification-bell">🔔</div>
                    <a  href="/profile" className="profile-avatar">JD</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
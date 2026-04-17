import { NavLink } from "react-router-dom";
import { useWatchlist } from "../../context/WatchlistContext.jsx";

function Navbar() {
  const { watchlistCount } = useWatchlist();

  return (
    <header className="topbar">
      <div className="topbar-inner container-xl">
        <NavLink to="/" className="brand" aria-label="Movie Explorer home">
          <span className="brand-icon">MX</span>
          <span>Movie Explorer</span>
        </NavLink>

        <nav className="topnav nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "topnav-link topnav-link-active nav-link"
                : "topnav-link nav-link"
            }
            end
          >
            Discover
          </NavLink>
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive
                ? "topnav-link topnav-link-active nav-link"
                : "topnav-link nav-link"
            }
          >
            Watchlist
            <span className="watchlist-pill">{watchlistCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

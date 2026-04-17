import { Link } from "react-router-dom";
import EmptyState from "../components/ui/EmptyState.jsx";
import MovieGrid from "../features/movies/components/MovieGrid.jsx";
import { useWatchlist } from "../context/WatchlistContext.jsx";

function Watchlist() {
  const { watchlist } = useWatchlist();

  if (watchlist.length === 0) {
    return (
      <EmptyState
        title="Your Watchlist Is Empty"
        description="Save a few movies from Discover and they will show up here."
      />
    );
  }

  return (
    <section className="watchlist-layout">
      <div className="results-bar">
        <p>
          You have <strong>{watchlist.length}</strong> saved titles.
        </p>
        <Link to="/" className="btn btn-outline-secondary btn-ghost">
          Explore More
        </Link>
      </div>
      <MovieGrid movies={watchlist} />
    </section>
  );
}

export default Watchlist;

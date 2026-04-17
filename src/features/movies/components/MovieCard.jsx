import { Link } from "react-router-dom";
import { useWatchlist } from "../../../context/WatchlistContext.jsx";
import { formatPosterUrl, toTitleCase } from "../../../utils/formatters.js";

function MovieCard({ movie }) {
  const { isInWatchlist, toggleWatchlist } = useWatchlist();

  const isSaved = isInWatchlist(movie.imdbID);

  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <img
          src={formatPosterUrl(movie.Poster)}
          alt={`Poster of ${movie.Title}`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x900/1b1733/e9dcff?text=No+Poster";
          }}
        />
      </div>

      <div className="movie-copy">
        <p className="movie-meta">
          {movie.Year} • {toTitleCase(movie.Type || "movie")}
        </p>
        <h3>{movie.Title}</h3>
      </div>

      <div className="movie-actions">
        <Link className="btn btn-primary btn-sm" to={`/movie/${movie.imdbID}`}>
          Details
        </Link>
        <button
          className="btn btn-outline-secondary btn-ghost btn-sm"
          onClick={() => toggleWatchlist(movie)}
        >
          {isSaved ? "Remove" : "Watchlist"}
        </button>
      </div>
    </article>
  );
}

export default MovieCard;

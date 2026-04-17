import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmptyState from "../components/ui/EmptyState.jsx";
import LoadingState from "../components/ui/LoadingState.jsx";
import { useWatchlist } from "../context/WatchlistContext.jsx";
import { getMovieDetails } from "../services/omdb.js";
import { formatPosterUrl } from "../utils/formatters.js";

function MovieDetail() {
  const { imdbID } = useParams();
  const { isInWatchlist, toggleWatchlist } = useWatchlist();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadMovie() {
      setLoading(true);
      setError("");

      try {
        const data = await getMovieDetails(imdbID, "full");
        if (isMounted) {
          setMovie(data);
        }
      } catch (detailsError) {
        if (isMounted) {
          setError(detailsError.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadMovie();

    return () => {
      isMounted = false;
    };
  }, [imdbID]);

  if (loading) {
    return <LoadingState message="Loading cinematic details..." />;
  }

  if (error || !movie) {
    return (
      <EmptyState
        title="Movie Not Available"
        description={error || "Could not load this title right now."}
      />
    );
  }

  return (
    <article className="detail-layout">
      <Link className="btn btn-outline-secondary btn-ghost align-self-start" to="/">
        Back to Discover
      </Link>

      <div className="detail-grid">
        <div className="detail-poster-wrap">
          <img
            src={formatPosterUrl(movie.Poster)}
            alt={`Poster of ${movie.Title}`}
            onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x900/1b1733/e9dcff?text=No+Poster";
          }}
          />
        </div>

        <section className="detail-content">
          <p className="eyebrow">{movie.Type?.toUpperCase()}</p>
          <h1>{movie.Title}</h1>
          <p className="detail-subtitle">
            {movie.Year} • {movie.Runtime} • {movie.Rated}
          </p>

          <p>{movie.Plot}</p>

          <div className="detail-facts">
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Language:</strong> {movie.Language}
            </p>
            <p>
              <strong className="imdb-mark">IMDb:</strong> {movie.imdbRating} / 10
            </p>
            <p>
              <strong>Awards:</strong> {movie.Awards}
            </p>
          </div>

          <div className="movie-actions">
            <button
              className="btn btn-primary"
              onClick={() => toggleWatchlist(movie)}
            >
              {isInWatchlist(movie.imdbID)
                ? "Remove from Watchlist"
                : "Add to Watchlist"}
            </button>
          </div>

          {Array.isArray(movie.Ratings) && movie.Ratings.length > 0 && (
            <div className="ratings-row">
              {movie.Ratings.map((rating) => (
                <span key={rating.Source} className="rating-chip">
                  {rating.Source}: {rating.Value}
                </span>
              ))}
            </div>
          )}
        </section>
      </div>
    </article>
  );
}

export default MovieDetail;

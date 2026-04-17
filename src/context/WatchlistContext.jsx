/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

const WatchlistContext = createContext(null);

function normalizeMovie(movie) {
  return {
    imdbID: movie.imdbID,
    Title: movie.Title,
    Year: movie.Year,
    Poster: movie.Poster,
    Type: movie.Type,
  };
}

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useLocalStorage(
    "movie-explorer-watchlist",
    [],
  );

  const value = useMemo(() => {
    const isInWatchlist = (imdbID) =>
      watchlist.some((movie) => movie.imdbID === imdbID);

    const toggleWatchlist = (movie) => {
      if (!movie?.imdbID) return;

      setWatchlist((previousItems) => {
        if (previousItems.some((item) => item.imdbID === movie.imdbID)) {
          return previousItems.filter((item) => item.imdbID !== movie.imdbID);
        }

        return [normalizeMovie(movie), ...previousItems];
      });
    };

    return {
      watchlist,
      watchlistCount: watchlist.length,
      isInWatchlist,
      toggleWatchlist,
    };
  }, [watchlist, setWatchlist]);

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);

  if (!context) {
    throw new Error("useWatchlist must be used within a WatchlistProvider");
  }

  return context;
}

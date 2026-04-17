import { useEffect, useState } from "react";
import { searchMovies } from "../../../services/omdb.js";

function useMovieSearch(initialQuery = "Avengers") {
  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState(1);

  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function runSearch() {
      setLoading(true);
      setError("");

      try {
        const data = await searchMovies({
          query,
          type,
          year,
          page,
        });

        if (isMounted) {
          setMovies(data.movies);
          setTotalResults(data.totalResults);
        }
      } catch (searchError) {
        if (isMounted) {
          setMovies([]);
          setTotalResults(0);
          setError(searchError.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    runSearch();

    return () => {
      isMounted = false;
    };
  }, [query, type, year, page]);

  const totalPages = Math.min(100, Math.max(1, Math.ceil(totalResults / 10)));

  const updateSearch = ({ nextQuery, nextType, nextYear }) => {
    setQuery(nextQuery);
    setType(nextType);
    setYear(nextYear);
    setPage(1);
  };

  return {
    query,
    type,
    year,
    page,
    movies,
    totalResults,
    totalPages,
    loading,
    error,
    updateSearch,
    setPage,
  };
}

export default useMovieSearch;

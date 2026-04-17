import EmptyState from "../components/ui/EmptyState.jsx";
import LoadingState from "../components/ui/LoadingState.jsx";
import MovieGrid from "../features/movies/components/MovieGrid.jsx";
import Pagination from "../features/movies/components/Pagination.jsx";
import SearchPanel from "../features/movies/components/SearchPanel.jsx";
import useMovieSearch from "../features/movies/hooks/useMovieSearch.js";

function Home() {
  const {
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
  } = useMovieSearch("Avengers");

  return (
    <div className="home-layout">
      <SearchPanel
        initialQuery={query}
        initialType={type}
        initialYear={year}
        onSubmit={updateSearch}
      />

      <section className="results-bar" aria-live="polite">
        <p>
          Showing <strong>{movies.length}</strong> of{" "}
          <strong>{totalResults}</strong> results
        </p>
      </section>

      {loading && <LoadingState message="Searching the OMDb universe..." />}

      {!loading && error && (
        <EmptyState
          title="Nothing Found"
          description={
            error === "Movie not found!"
              ? "Try a different title or remove some filters."
              : error
          }
        />
      )}

      {!loading && !error && movies.length === 0 && (
        <EmptyState
          title="No Results"
          description="Try another title, media type, or release year."
        />
      )}

      {!loading && !error && movies.length > 0 && (
        <>
          <MovieGrid movies={movies} />
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}

export default Home;

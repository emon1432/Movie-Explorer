import MovieCard from "./MovieCard.jsx";

function MovieGrid({ movies }) {
  return (
    <section className="movie-grid" aria-label="Search results">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </section>
  );
}

export default MovieGrid;

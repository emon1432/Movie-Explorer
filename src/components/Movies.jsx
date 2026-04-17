import React from "react";
import Movie from "./Movie";

function Movies({ movies }) {
  if (movies.length === 0) {
    return <p>No movie found!!!</p>;
  }
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;

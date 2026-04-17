import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=191c252e&i=${imdbID}`,
      );
      const data = await response.json();
      setMovie(data || null);
    }
    getMovie();
  }, [imdbID]);

  if (!movie) {
    return <p>Loading...!!!</p>;
  }

  //   console.log(movie);
  //   {
  //     "Title": "The Avengers",
  //     "Year": "2012",
  //     "Rated": "PG-13",
  //     "Released": "04 May 2012",
  //     "Runtime": "143 min",
  //     "Genre": "Action, Sci-Fi",
  //     "Director": "Joss Whedon",
  //     "Writer": "Joss Whedon, Zak Penn",
  //     "Actors": "Robert Downey Jr., Chris Evans, Scarlett Johansson",
  //     "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  //     "Language": "English, Russian",
  //     "Country": "United States",
  //     "Awards": "Nominated for 1 Oscar. 40 wins & 81 nominations total",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg",
  //     "Ratings": [
  //         {
  //             "Source": "Internet Movie Database",
  //             "Value": "8.0/10"
  //         },
  //         {
  //             "Source": "Rotten Tomatoes",
  //             "Value": "91%"
  //         },
  //         {
  //             "Source": "Metacritic",
  //             "Value": "69/100"
  //         }
  //     ],
  //     "Metascore": "69",
  //     "imdbRating": "8.0",
  //     "imdbVotes": "1,547,278",
  //     "imdbID": "tt0848228",
  //     "Type": "movie",
  //     "DVD": "N/A",
  //     "BoxOffice": "$623,357,910",
  //     "Production": "N/A",
  //     "Website": "N/A",
  //     "Response": "True"
  // }

  return (
    <div>
      <h2>{movie.Title}</h2>
      <img alt={movie.Title} src={movie.Poster} />
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Released:</strong>
        {movie.Released}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
      {/* and more */}
    </div>
  );
}

export default MovieDetail;

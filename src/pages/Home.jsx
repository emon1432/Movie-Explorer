import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query) => {
    setLoading(true);
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=191c252e&s=${query}`,
    );
    const data = await response.json();
    setMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {
    function getData() {
      fetchMovies("Avengers");
    }
    getData();
  }, []);

  return (
    <div>
      <Search onSearch={fetchMovies} />
      {loading ? <p>Loading...!!!</p> : <Movies movies={movies} />}
    </div>
  );
}

export default Home;

const API_BASE_URL = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

async function requestOMDb(params) {
  const queryString = new URLSearchParams({
    apikey: API_KEY,
    r: "json",
    ...params,
  });

  const response = await fetch(`${API_BASE_URL}?${queryString.toString()}`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Unexpected OMDb API error");
  }

  return data;
}

export async function searchMovies({ query, type, year, page = 1 }) {
  const normalizedQuery = query.trim();

  if (!normalizedQuery) {
    return {
      movies: [],
      totalResults: 0,
    };
  }

  const data = await requestOMDb({
    s: normalizedQuery,
    page: String(page),
    ...(type ? { type } : {}),
    ...(year ? { y: year } : {}),
  });

  return {
    movies: data.Search || [],
    totalResults: Number(data.totalResults || 0),
  };
}

export function getMovieDetails(imdbID, plot = "full") {
  return requestOMDb({
    i: imdbID,
    plot,
  });
}

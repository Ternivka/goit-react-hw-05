import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
import MovieList from "../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const searchQuery = query.get("query") || "";

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchQuery) return;

      setLoading(true);
      setError(null);

      const url = `https://api.themoviedb.org/3/search/movie?api_key=af069d5a4aa6dab18750675f951f88b6&query=${searchQuery}&language=en-US`;

      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (err) {
        setError(err.message || "Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const handleSearch = (event) => {
    const value = event.target.value;
    const newQuery = new URLSearchParams(query);
    if (value) {
      newQuery.set("query", value);
    } else {
      newQuery.delete("query");
    }
    setQuery(newQuery);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        placeholder="Search movie"
        value={searchQuery}
        onChange={handleSearch}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={movies} location={location} />
    </div>
  );
};

export default MoviesPage;

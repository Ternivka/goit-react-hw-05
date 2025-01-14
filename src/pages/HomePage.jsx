// HomePage
import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList/MovieList";
import s from "./pages.module.css";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("day");
  const [error, setError] = useState(null);

  const API_KEY = "af069d5a4aa6dab18750675f951f88b6";
  const BASE_URL = "https://api.themoviedb.org/3/trending/movie/";

  const location = useLocation();

  const fetchTrendingMovies = async (timeframe) => {
    const url = `${BASE_URL}${timeframe}?api_key=${API_KEY}&language=en-US&page=1`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
      setError(null);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      setError("Failed to fetch movies. Please try again later.");
    }
  };

  useEffect(() => {
    fetchTrendingMovies(category);
  }, [category]);

  return (
    <div>
      <h1>Trending Movies</h1>
      <div>
        <button onClick={() => setCategory("day")} className={s.trendBtn}>
          Trend Day Movie
        </button>
        <button onClick={() => setCategory("week")} className={s.trendBtn}>
          Trend Week Movie
        </button>
      </div>
      {error && <p>{error}</p>}
      <MovieList movies={movies} location={location} />
    </div>
  );
};

export default HomePage;

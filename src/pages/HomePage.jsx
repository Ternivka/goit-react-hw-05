
import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("day");
  const [error, setError] = useState(null);

  const API_KEY = "af069d5a4aa6dab18750675f951f88b6";
  const BASE_URL = "https://api.themoviedb.org/3/trending/movie/";

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
        <button onClick={() => setCategory("day")}>Trend Day Movie</button>
        <button onClick={() => setCategory("week")}>Trend Week Movie</button>
      </div>

      {error && <p>{error}</p>} 

      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;

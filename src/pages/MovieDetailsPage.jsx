import { useEffect, useRef, useState } from "react";
import { useParams, Link, Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";

import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/");
  useEffect(() => {
    goBackRef.current = location.state?.from || "/";
  }, [location]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=af069d5a4aa6dab18750675f951f88b6&language=en-US`;

      try {
        const response = await axios.get(url);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div>
      <Link to={goBackRef.current}>Go back</Link>
      <div>
        <img src={imageUrl} alt={movie.title} />
        <div>
          <h1>{movie.title}</h1>
          <p>
            <strong>Rating:</strong> {movie.vote_average} / 10
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres
              ? movie.genres.map((genre) => genre.name).join(", ")
              : "N/A"}
          </p>
        </div>
      </div>

      <div>
        <button>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </button>
        <button>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </button>
      </div>

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;

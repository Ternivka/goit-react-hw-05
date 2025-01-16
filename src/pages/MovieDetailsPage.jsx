import { useEffect, useRef, useState } from "react";
import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import axios from "axios";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/");

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
        <Link to={`cast`}>Cast</Link>
        <Link to={`reviews`}>Reviews</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;

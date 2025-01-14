import { Link } from "react-router-dom";
import s from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <ul className={s.ulMovieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.movieItem}>
          <Link to={`/movies/${movie.id}`}>
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

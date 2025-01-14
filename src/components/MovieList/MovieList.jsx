import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies, location }) => {
  if (movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <ul className={s.ulMovieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.movieItem}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array.isRequired, // Ожидаем массив фильмов
  location: PropTypes.object.isRequired, // Ожидаем объект location
};
export default MovieList;

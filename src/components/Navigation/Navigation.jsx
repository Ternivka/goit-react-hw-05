import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={s.headerNav}>
      <nav className={s.nav}>
        <button className={s.btn}>
          <Link to="/" className={s.text}>
            Home
          </Link>
        </button>
        <button className={s.btn}>
          <Link to="/movies" className={s.text}>
            Movies
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Navigation;

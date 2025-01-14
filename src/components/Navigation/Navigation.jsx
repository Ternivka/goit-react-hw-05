import { Link } from "react-router-dom";
import "../../App.css";

const Navigation = () => {
  return (
    <header>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/movies">Movies</Link>
        </button>
      </nav>
    </header>
  );
};

export default Navigation;

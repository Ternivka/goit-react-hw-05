import { Link } from "react-router-dom";


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

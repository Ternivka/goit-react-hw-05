import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";

const HomePage = React.lazy(() => import("./components/pages/HomePage"));
const MoviesPage = React.lazy(() => import("./components/pages/MoviesPage"));
const MovieDetailsPage = React.lazy(() =>
  import("./components/pages/MovieDetailsPage")
);

const MovieCast = React.lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = React.lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const NotFoundPage = React.lazy(() =>
  import("./components/pages/NotFoundPage")
);

const App = () => {
  return (
    <>
      <Navigation />

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/movies" element={<MoviesPage />} />

            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>

            {/* Страница "Not Found" */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;

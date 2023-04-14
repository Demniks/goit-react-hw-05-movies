import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from 'components/Loading/loading';

const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./Pages/MoviesPage/MoviesPage'));
const MoviesDetailsPage = lazy(() =>
  import('./Pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const UseRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UseRoutes;

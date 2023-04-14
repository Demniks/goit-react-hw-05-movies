import { useState, useEffect } from 'react';
import Loading from 'components/Loading/loading';

import MoviesList from 'components/MoviesList/MoviesList';
import Error from 'components/Error/Error';

import { getMoviesTrending } from '../../services/moviesApi';

const TrendingMovies = () => {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const result = await getMoviesTrending();
        setMovie(result);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      {loading && <Loading />}

      {error && <Error />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default TrendingMovies;

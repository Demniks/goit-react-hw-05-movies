import { useLocation } from 'react-router-dom';

import {
  MoviesLink,
  MoviesLists,
  MoviesItem,
  Image,
} from './MoviesList.styled';
import noImage from '../../image/noImage.png';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesLists>
      {movies.map(({ id, title, poster_path }) => (
        <MoviesItem key={id}>
          <MoviesLink state={{ from: location }} to={`/movies/${id}`}>
            <Image
              src={
                !poster_path
                  ? noImage
                  : `https://image.tmdb.org/t/p/w500/${poster_path}`
              }
              alt={title}
            />
            {title}
          </MoviesLink>
        </MoviesItem>
      ))}
    </MoviesLists>
  );
};

export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};

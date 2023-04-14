import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../../services/moviesApi';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/loading';

import {
  ReviewsMassage,
  ReviewsName,
  ReviewsList,
  ReviewsItem,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setLoading(true);
        const result = await getMoviesReviews(Number(movieId));

        setReviews(result);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesDetails();
  }, [movieId]);
  return (
    <>
      {loading && <Loading />}

      {error && <Error />}
      {reviews.length > 0 && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsName>Author: {author}</ReviewsName>
              <p>{content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
      {reviews.length === 0 && !error && (
        <ReviewsMassage>
          We don't have any reviews for this movie
        </ReviewsMassage>
      )}
    </>
  );
};
export default Reviews;

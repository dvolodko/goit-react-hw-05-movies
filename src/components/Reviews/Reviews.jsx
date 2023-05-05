import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getMovieReviews } from 'api-service';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const movieReviews = await getMovieReviews(movieId);
      setMovieReviews(movieReviews.results);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {movieReviews.length ? (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
}

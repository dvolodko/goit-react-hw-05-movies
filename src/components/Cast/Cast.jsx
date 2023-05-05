import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getMovieCredits } from 'api-service';

export default function Cast() {
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const movieCredits = await getMovieCredits(movieId);
      setMovieCredits(movieCredits.cast);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {movieCredits ? (
        <ul>
          {movieCredits.map(cast => (
            <li key={cast.id}>
              {cast.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  width={200}
                  alt={cast.name}
                />
              )}
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any cast info for this movie.</p>
      )}
    </div>
  );
}

import React, { useEffect, useState, useRef, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
// import PropTypes from 'prop-types';
import { getMovieDetails } from 'api-service';
import {
  MovieCardContainer,
  GoBackButton,
  MovieCard,
  MovieCardInfo,
  MoviePoster,
  MovieTitle,
  UserScore,
  OverviewTitle,
  Overview,
  GenresTitle,
  GenresList,
  Genre,
  AdditionalInfo,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieCard, setMovieCard] = useState({});
  const [releaseYear, setReleaseYear] = useState('');
  const { movieId } = useParams();
  const { state } = useLocation();
  const backLinkHref = useRef(state?.from ?? '/');
  const userScore = Math.round(Number(movieCard.vote_average * 10));

  useEffect(() => {
    const getData = async () => {
      const movie = await getMovieDetails(movieId);
      setMovieCard(movie);
    };
    getData();
  }, [movieId]);

  useEffect(() => {
    if (movieCard.release_date) {
      setReleaseYear(movieCard.release_date.split('-')[0]);
    }
  }, [movieCard]);

  return (
    <>
      <MovieCardContainer>
        <GoBackButton to={backLinkHref.current}>&#x2190; Go back</GoBackButton>
        <MovieCard>
          {movieCard.poster_path && (
            <MoviePoster
              src={`https://image.tmdb.org/t/p/w500${movieCard.poster_path}`}
              alt={movieCard.title}
            />
          )}
          <MovieCardInfo>
            <MovieTitle>
              {movieCard.title} ({releaseYear})
            </MovieTitle>
            <UserScore>User Score: {userScore}%</UserScore>
            <OverviewTitle>Overview</OverviewTitle>
            <Overview>{movieCard.overview}</Overview>
            <GenresTitle>Genres</GenresTitle>
            {movieCard.genres ? (
              <GenresList>
                {movieCard.genres.map(({ name }) => (
                  <Genre key={name}>{name}</Genre>
                ))}
              </GenresList>
            ) : (
              <p>No data about genres</p>
            )}
          </MovieCardInfo>
        </MovieCard>
      </MovieCardContainer>
      <AdditionalInfo>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </AdditionalInfo>
      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="orange"
            ariaLabel="three-dots-loading"
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

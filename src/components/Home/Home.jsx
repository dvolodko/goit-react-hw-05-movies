import React from 'react';
// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'api-service';
import {
  HomePageContainer,
  TrendingMoviesList,
  TrendingMovie,
  StyledLink,
  Heading,
} from './Home.styled';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const movies = await getTrendingMovies();
      setTrendingMovies(
        movies.results.map(({ title, id, poster_path }) => ({
          title,
          id,
          poster_path,
        }))
      );
    };
    getData();
  }, []);

  return (
    <HomePageContainer>
      <Heading>Trending today</Heading>
      <TrendingMoviesList>
        {trendingMovies.map(movie => (
          <TrendingMovie key={movie.id}>
            <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {movie.title}
            </StyledLink>
          </TrendingMovie>
        ))}
      </TrendingMoviesList>
    </HomePageContainer>
  );
};

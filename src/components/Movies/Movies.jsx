import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesByKeyword } from 'api-service';
// import PropTypes from 'prop-types';
import {
  MoviesContainer,
  MoviesList,
  Movie,
  StyledLink,
  SearchForm,
} from './Movies.styled';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesByKeyword, setMoviesByKeyword] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!movieQuery) return;

    const getData = async () => {
      const movies = await getMoviesByKeyword(movieQuery);
      setMoviesByKeyword(movies.results);
    };
    getData();
  }, [movieQuery]);

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      alert(
        'You are trying to search for empty string. Please type something in search field'
      );
      return;
    }
    setSearchParams({ query: searchQuery });
  };

  return (
    <MoviesContainer>
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </SearchForm>
      <MoviesList>
        {moviesByKeyword.map(movie => (
          <Movie key={movie.id}>
            <StyledLink to={`${movie.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {movie.title}
            </StyledLink>
          </Movie>
        ))}
      </MoviesList>
    </MoviesContainer>
  );
};

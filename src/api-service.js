import axios from 'axios';
const API_KEY = 'ed6f703d0e9f91008dbdcbc89334b381';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const trendingMovies = `/trending/movie/day?api_key=${API_KEY}`;
  return get(trendingMovies);
};

export const getMovieDetails = async movieId => {
  const movieDetails = `/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  return get(movieDetails);
};

export const getMovieCredits = async movieId => {
  const movieCredits = `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  return get(movieCredits);
};

export const getMovieReviews = async movieId => {
  const moviesReview = `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
  return get(moviesReview);
};

export const getMoviesByKeyword = async keyword => {
  const moviesByKeyword = `/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&include_adult=false`;
  return get(moviesByKeyword);
};

const get = async query => {
  try {
    const { data } = await axios.get(query);
    return data;
  } catch (error) {
    console.log(`Request to ${query} threw an error`);
    console.log(`Error: `, error);
  }
};

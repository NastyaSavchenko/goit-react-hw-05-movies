import axios from 'axios';

const URL = `https://api.themoviedb.org/3`;
const API_KEY = '0d4231e0c429b3e7189b7b34e11530b5';

export const api = axios.create({
  baseURL: URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendMovies = () => {
  const response = api.get(`/trending/movie/day`);
  return response;
};

export const getMoviesByName = query => {
  const response = api.get(`/search/movie?query=${query}`);
  return response;
};

export const getMoviesDetails = movie_id => {
  const response = api.get(`/movie/${movie_id}?`);
  return response;
};

export const getCasts = movie_id => {
  const response = api.get(`/movie/${movie_id}/credits?`);
  return response;
};

export const getReviews = movie_id => {
  const response = api.get(`/movie/${movie_id}/reviews?`);
  return response;
};

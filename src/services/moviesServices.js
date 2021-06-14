import tmdbApi from '../utils/tmdbApi';
import fetchWrapper from '../utils/fetchWrapper';

const fetchMovie = (movieId) => {
  const url = `${tmdbApi.url}movie/${movieId}?${tmdbApi.key}&language=pt-BR`;
  return fetchWrapper(url);
};

const fetchMoviesByQuery = (movieQuery) => {
  const url = `${tmdbApi.url}search/movie?${tmdbApi.key}&language=pt-BR&query=${movieQuery}`;
  return fetchWrapper(url);
};

export { fetchMovie, fetchMoviesByQuery };

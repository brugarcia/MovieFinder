import PropTypes from 'prop-types';
import React, { useCallback, useMemo, useReducer } from 'react';

import { fetchMovie, fetchMoviesByQuery } from '../services/moviesServices';

const MoviesContext = React.createContext();

const MoviesConsumer = MoviesContext.Consumer;

const initState = {
  movie: {},
  moviesList: [],
  status: '',
  isListOpen: false,
  isDetailsOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setMovie':
      return {
        ...state, movie: action.payload, status: 'loaded', isListOpen: false, isDetailsOpen: true,
      };
    case 'setMoviesList':
      return {
        ...state, moviesList: action.payload, status: 'loaded', isListOpen: true, isDetailsOpen: false,
      };
    case 'setStatus':
      return { ...state, status: action.payload };
    default:
      throw new Error();
  }
}

const MoviesProvider = ({ children }) => {
  const [state, dispatchMovies] = useReducer(reducer, initState);

  const loadMovie = useCallback((movieId) => {
    dispatchMovies({ type: 'setStatus', payload: 'loading' });
    fetchMovie(movieId)
      .then((response) => {
        setTimeout(() => dispatchMovies({ type: 'setMovie', payload: response }), 1000);
      })
      .catch((error) => {
        dispatchMovies({ type: 'setStatus', payload: 'error' });
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  const loadMoviesList = useCallback((name) => {
    dispatchMovies({ type: 'setStatus', payload: 'loading' });
    fetchMoviesByQuery(name)
      .then((response) => {
        setTimeout(() => dispatchMovies({ type: 'setMoviesList', payload: response }), 1000);
      })
      .catch((error) => {
        dispatchMovies({ type: 'setStatus', payload: 'error' });
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  console.log(state);

  const providerValue = useMemo(() => ({
    ...state,
    loadMovie,
    loadMoviesList,
  }),
  [
    loadMovie,
    loadMoviesList,
    state,
  ]);
  return (
    <MoviesContext.Provider value={providerValue}>
      {children}
    </MoviesContext.Provider>
  );
};

MoviesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export {
  MoviesConsumer,
  MoviesContext as default,
  MoviesProvider,
};

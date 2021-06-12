import PropTypes from 'prop-types';
import React, { useCallback, useMemo, useReducer } from 'react';

import fetchMoviesByQuery from '../services/moviesServices';

const MoviesContext = React.createContext();

const MoviesConsumer = MoviesContext.Consumer;

const initialState = {
  moviesList: [],
  moviesListStatus: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'setMoviesList':
      return { ...state, moviesList: action.payload, moviesListStatus: 'loaded' };
    case 'setMoviesListStatus':
      return { ...state, moviesListStatus: action.payload };
    default:
      throw new Error();
  }
}

const MoviesProvider = ({ children }) => {
  const [state, dispatchMovies] = useReducer(reducer, initialState);

  const loadMoviesList = useCallback((name) => {
    dispatchMovies({ type: 'setMoviesListStatus', payload: 'loading' });
    fetchMoviesByQuery(name)
      .then((response) => {
        setTimeout(() => dispatchMovies({ type: 'setMoviesList', payload: response }), 1000);
      })
      .catch((error) => {
        dispatchMovies({ type: 'setMoviesListStatus', payload: 'error' });
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  const providerValue = useMemo(() => ({
    ...state,
    loadMoviesList,
  }),
  [
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

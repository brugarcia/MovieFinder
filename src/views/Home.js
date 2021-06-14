import React, { useContext } from 'react';
import SearchIcon from '../assets/images/search.svg';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
import LoadingHandler from '../components/LoadingHandler';

import MoviesContext from '../contexts/MoviesContext';

const Home = () => {
  const {
    loadMoviesList,
    status,
    isListOpen,
    isDetailsOpen,
  } = useContext(MoviesContext);

  const searchMovies = (event) => {
    if (event.key === 'Enter') {
      loadMoviesList(event.target.value);
    }
  };

  return (
    <>
      <SearchBar
        icon={SearchIcon}
        onKeyDown={searchMovies}
        placeholder="Buscar Filme"
      />
      <LoadingHandler dataStatus={status}>
        {isListOpen && (
          <MovieList />
        )}
        {isDetailsOpen && (
          <MovieDetails />
        )}
      </LoadingHandler>

    </>
  );
};

export default Home;

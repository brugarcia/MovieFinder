import React, { useContext } from 'react';
import SearchIcon from '../assets/images/search.svg';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import LoadingHandler from '../components/LoadingHandler';

import MoviesContext from '../contexts/MoviesContext';

const Home = () => {
  const {
    loadMoviesList,
    status,
  } = useContext(MoviesContext);

  const searchMovies = (event) => {
    console.log(event);
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
        <MovieList />
      </LoadingHandler>

    </>
  );
};

export default Home;

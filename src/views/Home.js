import React, { useContext } from 'react';
import SearchIcon from '../assets/images/search.svg';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
import LoadingHandler from '../components/LoadingHandler';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

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
      <Header text="MOVIE FINDER" />
      <Main>
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
      </Main>
      <Footer text={`${new Date().getFullYear()} - Bruno Fernandes`} />
    </>
  );
};

export default Home;

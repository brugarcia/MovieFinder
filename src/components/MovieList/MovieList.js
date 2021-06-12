import React, { useContext } from 'react';

import StyledMovieList from './StyledMovieList';

import MoviesContext from '../../contexts/MoviesContext';
import MovieListItem from './MovieListItem';
import StyledMovieListItem from './MovieListItem/StyledMovieListItem';

const MovieList = () => {
  const {
    moviesList,
  } = useContext(MoviesContext);

  return (
    <StyledMovieListItem>
      {moviesList.results?.map(({ id, poster_path: posterPath, title }) => (
        <div key={id}>
          <MovieListItem name={title} image={posterPath} />
        </div>
      ))}
    </StyledMovieListItem>
  );
};

export default MovieList;

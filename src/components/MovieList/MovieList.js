import React, { useContext } from 'react';

import StyledMovieList from './StyledMovieList';

import MoviesContext from '../../contexts/MoviesContext';
import MovieListItem from './MovieListItem';

const MovieList = () => {
  const {
    moviesList,
  } = useContext(MoviesContext);

  return (
    <StyledMovieList>
      {moviesList.results?.map(({ id, poster_path: posterPath, title }) => (
        <div key={id}>
          <MovieListItem name={title} image={posterPath} />
        </div>
      ))}
    </StyledMovieList>
  );
};

export default MovieList;

import React, { useContext } from 'react';
import StyledMovieDetails from './StyledMovieDetails';

import MoviesContext from '../../contexts/MoviesContext';

const MovieDetails = () => {
  const {
    movie,
  } = useContext(MoviesContext);

  return (
    <StyledMovieDetails>
      {movie.original_title}
    </StyledMovieDetails>
  );
};

export default MovieDetails;

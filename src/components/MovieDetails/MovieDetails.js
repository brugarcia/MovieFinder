import React, { useContext } from 'react';
import StyledMovieDetails from './StyledMovieDetails';
import ImageWrapper from '../ImageWrapper';

import MoviesContext from '../../contexts/MoviesContext';

const MovieDetails = () => {
  const {
    movie,
  } = useContext(MoviesContext);

  const {
    original_title: originalTitle,
    poster_path: imagePath,
  } = movie;

  return (
    <StyledMovieDetails>
      {originalTitle}
      <ImageWrapper name={originalTitle} path={imagePath} size={500} />
    </StyledMovieDetails>
  );
};

export default MovieDetails;

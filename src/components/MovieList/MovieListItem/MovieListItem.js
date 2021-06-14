import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StyledMovieListItem from './StyledMovieListItem';
import movieImage from '../../../utils/movieImage';

import MoviesContext from '../../../contexts/MoviesContext';

const MovieListItem = ({ movieId, name, image }) => {
  const {
    loadMovie,
  } = useContext(MoviesContext);

  const handleLoadMovie = () => {
    loadMovie(movieId);
  };

  return (
    <StyledMovieListItem onClick={handleLoadMovie}>
      <img className="movie-image" src={movieImage({ imagePath: image, size: 200 })} alt={name} />
      <h2 className="movie-title">{name}</h2>
    </StyledMovieListItem>
  );
};

MovieListItem.propTypes = {
  movieId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MovieListItem;

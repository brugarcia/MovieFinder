import React from 'react';
import PropTypes from 'prop-types';
import StyledMovieListItem from './StyledMovieListItem';
import movieImage from '../../../utils/movieImage';

const MovieListItem = ({ movieId, name, image }) => (
  <StyledMovieListItem>
    <img src={movieImage({ imagePath: image, size: 200 })} alt={name} />
    <h2>{name}</h2>
  </StyledMovieListItem>
);

MovieListItem.propTypes = {
  movieId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MovieListItem;

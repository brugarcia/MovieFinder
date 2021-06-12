import React from 'react';
import PropTypes from 'prop-types';
import StyledMovieListItem from './StyledMovieListItem';
import movieImage from '../../../utils/movieImage';

const MovieListItem = ({ name, image }) => (
  <StyledMovieListItem>
    <img src={movieImage({ imagePath: image, size: 200 })} alt={name} />
  </StyledMovieListItem>
);

MovieListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MovieListItem;

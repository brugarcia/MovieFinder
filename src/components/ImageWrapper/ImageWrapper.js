import React from 'react';
import PropTypes from 'prop-types';
import StyledImageWrapper from './StyledImageWrapper';
import movieImage from '../../utils/movieImage';

const ImageWrapper = ({
  name, path, size,
}) => (
  <StyledImageWrapper src={movieImage({ imagePath: path, size })} alt={name} />
);

ImageWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  size: PropTypes.number,
};

ImageWrapper.defaultProps = {
  size: 200,
};

export default ImageWrapper;

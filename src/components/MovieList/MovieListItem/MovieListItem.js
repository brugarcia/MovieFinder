import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StyledMovieListItem from './StyledMovieListItem';
import ImageWrapper from '../../ImageWrapper';

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
      <div className="movie-image">
        <ImageWrapper path={image} size={200} name={name} />
      </div>
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

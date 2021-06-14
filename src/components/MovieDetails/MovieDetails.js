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
    title,
    overview,
    release_date: date,
    runtime,
    vote_average: rating,
  } = movie;

  return (
    <StyledMovieDetails>
      <span className="infos">
        <h1 className="title">
          {title}
        </h1>

        <span className="mini-infos">
          <div className="date">
            {date.split('-', 1)}
          </div>
          <div className="runtime">
            {`${runtime} min`}
          </div>
        </span>

        <p className="overview">
          {overview}
        </p>

        <div className="rating">
          {`Nota: ${rating}`}
        </div>
      </span>

      <span className="movie-image">
        <ImageWrapper name={originalTitle} path={imagePath} size={400} />
      </span>
    </StyledMovieDetails>
  );
};

export default MovieDetails;

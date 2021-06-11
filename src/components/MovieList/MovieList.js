import React, { useContext } from 'react';

import MoviesContext from '../../contexts/MoviesContext';
import movieImage from '../../utils/movieImage';

// const initState = {
// moviesList: []
// }

const MovieList = () => {
  // const [state, setState] = useState(initState)
  const {
    moviesList,
  } = useContext(MoviesContext);

  return (
    <>
      {moviesList.results?.map(({ id, poster_path: posterPath, title }) => (
        <div key={id}>
          <img src={movieImage(posterPath)} alt={title} />
        </div>
      ))}
    </>
  );
};

export default MovieList;

import React, { useContext } from 'react';

import MoviesContext from '../../contexts/MoviesContext';

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
      {moviesList.results?.map(({ id, title }) => (
        <div key={id}>
          {title}
        </div>
      ))}
    </>
  );
};

export default MovieList;

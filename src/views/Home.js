import React, { useContext } from 'react'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import LoadingHandler from '../components/LoadingHandler'

import MoviesContext from '../contexts/MoviesContext'



const Home = () => {

  const {
    moviesListStatus,
	 } = useContext(MoviesContext)

	return	(
		<>
			<SearchBar/>
      <LoadingHandler dataStatus={moviesListStatus}>
        <MovieList/>
      </LoadingHandler>

		</>
	)
}





export default Home

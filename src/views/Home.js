import React, {useContext, useEffect} from 'react'

import MoviesContext from '../contexts/MoviesContext'

const Home = () => {
	const { 
		loadMoviesList,
		moviesList,
	 } = useContext(MoviesContext)

	 console.log('lista', moviesList)
	
	useEffect(() => {
		loadMoviesList('batman');
	}, [loadMoviesList]);
	
	return	(
		<>
			{moviesList.results?.map(({title}) => (
				<div key={title}>
					{title}
				</div>
			))}
		</>
	)
}
	

	


export default Home
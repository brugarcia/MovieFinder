import React, {useContext, useState} from 'react'

import MoviesContext from '../../contexts/MoviesContext'

const initState = {
	moviesList: []
}


const MovieList = () => {
	const [state, setState] = useState(initState);
    const { 
		moviesList,
	 } = useContext(MoviesContext)

	return (
        <>
			{moviesList.results?.map(({title}) => (
				<div key={title}>
					{title}
				</div>
			))}
		</>
	)
}

export default MovieList
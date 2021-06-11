import React, {useContext, useState} from 'react'

import MoviesContext from '../../contexts/MoviesContext'

const initState = {
	value: '',
}


const SearchBar = () => {
	const [state, setState] = useState(initState);
    const { 
		loadMoviesList,
		moviesList,
	 } = useContext(MoviesContext)


	const handleChange = (event) => {
		if (event.key === 'Enter') {
		  loadMoviesList(event.target.value)
		}
	  }

	return (
        <>
            <div>
                <input placeholder="Pesquise seu filme..." type="text" onKeyDown={handleChange} value={state.value} onChange={(e) => setState(() => ({value: e.target.value}))}/>
            </div>
            {moviesList.results && (
                <div>Filmes encontrados: {moviesList.results.length}</div>
            )}
        </>

	)
}

export default SearchBar
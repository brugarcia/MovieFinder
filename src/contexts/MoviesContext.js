import React, { useCallback, useMemo, useReducer } from 'react'

import fetchMoviesByQuery from '../services/fetchMoviesByQuery'

const MoviesContext = React.createContext()

const MoviesConsumer = MoviesContext.Consumer

const initialState = {
    moviesList: [],
    moviesListStatus: '',
}

function reducer(state, action) {
	switch (action.type) {
		case 'setMoviesList':
			return { ...state, moviesList: action.payload, moviesListStatus: 'loaded' }
		case 'setMoviesListStatus':
			return { ...state, moviesListStatus: action.payload }
		default:
			throw new Error()
	}
}

const MoviesProvider = ({ children }) => {
  const [state, dispatchMovies] = useReducer(reducer, initialState)
  console.log(state.moviesListStatus)

	const loadMoviesList = useCallback((name) => {
		dispatchMovies({ type: 'setMoviesListStatus', payload: 'loading' })
		fetchMoviesByQuery(name)
			.then((response) => {
			  setTimeout(() => dispatchMovies({ type: 'setMoviesList', payload: response }), 3000)
			})
			.catch((error) => {
				dispatchMovies({ type: 'setMoviesListStatus', payload: 'error' })
                console.log(error)
			})
	}, [])

	console.log(state)

	const providerValue = useMemo(() => ({
			...state,
			loadMoviesList,
		}),
		[
			loadMoviesList,
			state,
		])
	return (
		<MoviesContext.Provider value={providerValue}>
			{children}
		</MoviesContext.Provider>
	)
}

export {
  MoviesConsumer,
  MoviesContext as default,
  MoviesProvider,
}

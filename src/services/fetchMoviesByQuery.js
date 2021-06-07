import tmdbApi from '../utils/tmdbApi'

const fetchMoviesByQuery = (movieQuery) => {
    const url = `${tmdbApi.url}search/movie?${tmdbApi.key}&language=pt-BR&query=${movieQuery}`
    return fetch(url).then((response) => {
        if (!response.ok) {
			throw Error(response.status);
		}
		return response.json();
    })
}

export default fetchMoviesByQuery
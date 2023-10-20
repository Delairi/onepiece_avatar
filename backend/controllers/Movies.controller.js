import MoviesService from "../services/Movies.service.js"

const MoviesController = () => {
    return {

        getMovies: async (req, res) => {

            const getMovies = await MoviesService().getMovies()
            return getMovies

        }

    }

}

export default MoviesController
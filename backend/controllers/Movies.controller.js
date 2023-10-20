import MoviesService from "../services/Movies.service.js"

const MoviesController = () => {
    return {

        getMovies: async (req, res) => {

            const getMovies = await MoviesService().getMovies()
            return getMovies

        },
        filterMovies: async (req, res) => {

            const query  = req.params.query
            const filterMovies = await MoviesService().filterMovies(query)
            return filterMovies

        },

    }

}

export default MoviesController
import { ModelMovies } from "../models/Movies.model.js"

const MoviesService = () => {
    return {

        getMovies: async () => {

            const getMovies = await ModelMovies.find()
            if(!getMovies) throw new Error('No Movies')
            return getMovies

        }

    }

}

export default MoviesService
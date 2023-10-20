import { ModelMovies } from "../models/Movies.model.js"

const MoviesService = () => {
    return {

        getMovies: async () => {

            const getMovies = await ModelMovies.find()
            if(!getMovies) throw new Error('No Movies')
            return getMovies

        },
        filterMovies: async (query) => {
            console.log(query)
            const filterMovies = await ModelMovies.find({
                title: {
                    $regex: query,
                    $options: 'i'
                }
            })
            if(!filterMovies) throw new Error('Error in filter')
            if(filterMovies.length === 0) throw new Error('No Movies')
            return filterMovies
        },

    }

}

export default MoviesService
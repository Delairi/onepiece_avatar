import CharactersService from "../services/Character.service.js"

const CharactersController = () => {
    return {

        getCharactersFromMovie: async (req, res) => {


            const mal_id = req.params.mal_id
            const getCharactersFromMovie = await CharactersService().getCharactersFromMovie(mal_id)
            return getCharactersFromMovie
        },
        getCharacter: async (req, res) => {

            const mal_id = req.params.mal_id
            const getCharacter = await CharactersService().getCharacter(mal_id)
            return getCharacter
            
        }

    }

}

export default CharactersController

const CharactersService = () => {
    return {

        getCharactersFromMovie: async (mal_id) => {

            try{
                const response = await fetch(`${process.env.BASE_URL}/anime/${mal_id}/characters`)
                const data = await response.json()
                return data

            }catch(err){
                return err
            }

        },
        getCharacter: async (mal_id) => {
            try{
                const response = await fetch(`${process.env.BASE_URL}/characters/${mal_id}/full`)
                const data = await response.json()
                return data

            }catch(err){
                return err
            }
        }

    }

}

export default CharactersService
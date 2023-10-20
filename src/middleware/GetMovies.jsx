import { MoviesThunk } from "../reducers/ListReducer"

export const GetMovies = (store) => (next) => async (action) => {

    if(action.type === 'api/movies'){
        console.log(action)
        store.dispatch(MoviesThunk(action.payload))
    }
    return next(action)

}
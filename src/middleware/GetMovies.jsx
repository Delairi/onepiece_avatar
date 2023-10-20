import { MoviesThunk } from "../reducers/ListReducer"
import { PreferenceThunk } from "../reducers/PreferenceReducer"

export const GetMovies = (store) => (next) => async (action) => {

    if(action.type === 'api/movies'){
        store.dispatch(MoviesThunk(action.payload))
    }
    if(action.type === 'api/preference'){
        console.log(action.payload)
        store.dispatch(PreferenceThunk(action.payload))
    }
    return next(action)

}
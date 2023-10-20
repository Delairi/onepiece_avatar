import { configureStore } from '@reduxjs/toolkit'
import ListReducer from '../reducers/ListReducer'
import CharacterReducer from '../reducers/CharactersReducer'
import { GetMovies } from '../middleware/GetMovies'
import PreferenceReducer from '../reducers/PreferenceReducer'

const store = configureStore({
  reducer: {
    movies:ListReducer,
    characters:CharacterReducer,
    preference:PreferenceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(GetMovies)
})

export default store
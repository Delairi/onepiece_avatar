import { configureStore } from '@reduxjs/toolkit'
import ListReducer from '../reducers/ListReducer'
import CharacterReducer from '../reducers/CharactersReducer'
import { GetMovies } from '../middleware/GetMovies'

const store = configureStore({
  reducer: {
    movies:ListReducer,
    character:CharacterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(GetMovies)
})

export default store
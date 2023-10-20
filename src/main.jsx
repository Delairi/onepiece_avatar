import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Character from './pages/Character/Character'
import App from './App'
import Movie from './pages/Movie/Movie'
import { Provider } from 'react-redux'
import store from './app/store'
import Characters from './pages/Characters/Characters'
import Favorites from './pages/Favorites/Favorites'
const routes = createBrowserRouter([
  {
   path:'/',
   element:<App />, 
   children:[
    {
      path:'/',
      element:<Home /> 
    },
     {
       path:'movie/:mal_id',
       element:<Movie />
     },
     {
       path:'movie/:idMovie/character/:idCharacter',
       element:<Character />
     },
     {
        path:'characters',
        element:<Characters />
     },
     {
        path:'favorites',
        element:<Favorites />
     },
     {
        path:'*',
        element:<Home />
     }

   ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <RouterProvider router={routes} />
  </Provider>
)

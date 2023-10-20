import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Characters from './pages/Characters/Characters'
import App from './App'
import Movie from './pages/Movie/Movie'
import { Provider } from 'react-redux'
import store from './app/store'
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
       path:'characters',
       element:<Characters />
     },
     {
       path:'movie/:mal_id',
       element:<Movie />
     }
   ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <RouterProvider router={routes} />
  </Provider>
)

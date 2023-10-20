import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"


const App = () => {

    const dispatch = useDispatch()
  const characters = useSelector(state => state.characters)
    useEffect(() => {
        dispatch({
          type:'api/movies',
          payload:{
            url:'/api/v1/movies'
          }
        })

    }, [])


    useEffect(() => {
      if(characters.status === 'success'|| characters.status === 'idle'  ) dispatch({
        type:'api/preference',
        payload:{
          url:'/api/v1/movies/last_view'
        }
      })
      
    }, [characters])

  return (
    <div>
        <Nav />
    <Outlet />
    </div>
  )
}

export default App

import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import { useDispatch } from "react-redux"
import { useEffect } from "react"


const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
          type:'api/movies',
          payload:{
            url:'/anime?q=one%20piece&type=Movie'
          }
        })
    }, [])

  return (
    <div>
        <Nav />
    <Outlet />
    </div>
  )
}

export default App

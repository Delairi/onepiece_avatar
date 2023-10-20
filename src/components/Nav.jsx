import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul className='ul-nav'>
        <li>
            <Link to='/'>Inicio</Link>
        </li>
        <li>
            <Link to='/characters'>Personajes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

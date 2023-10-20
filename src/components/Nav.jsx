import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul className='ul-nav'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/favorites'>Favorites</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

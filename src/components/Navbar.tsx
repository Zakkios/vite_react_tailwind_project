import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <NavLink to={'/'} className={({ isActive }) =>
                isActive ? 
                "block py-2 pl-3 pr-4 text-blue-400 hover:text-blue-500" : 
                "block py-2 pl-3 pr-4 hover:text-blue-500"
            }>
                Accueil
            </NavLink>
            <NavLink to={'/quotes'} className={({ isActive }) =>
                isActive ? 
                "block py-2 pl-3 pr-4 text-blue-400 hover:text-blue-500" : 
                "block py-2 pl-3 pr-4 hover:text-blue-500"
            }>
                Citations
            </NavLink>
        </ul>
    </nav>
  )
}

export default Navbar
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex py-5 px-12 bg-slate-900 fixed w-screen'>
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
    </nav>
  )
}

export default Navbar
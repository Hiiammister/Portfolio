import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
    <NavLink
  to="/"
  className={({ isActive }) =>
    `
    hidden sm:flex
    items-center justify-center
    font-semibold
    px-2 py-1
    bg-transparent rounded-none
    ${isActive ? "text-blue-500" : "text-gray-700"}

    sm:bg-white sm:rounded-lg sm:px-3 sm:py-2 sm:shadow-md
    `
  }
>
  <p className="text-linear-gradient">AB</p>
</NavLink>


      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({isActive})=>isActive ? 'text-blue-500': 'text-black-500'}>
          About
        </NavLink>
        <NavLink to="/projects" className={({isActive})=>isActive ? 'text-blue-500': 'text-black-500'}>
          Projects
        </NavLink>
        <NavLink to="/certifications" className={({isActive})=>isActive ? 'text-blue-500': 'text-black-500'}>
          Certifications
        </NavLink>

      </nav>
    </header>
  )
}

export default Navbar

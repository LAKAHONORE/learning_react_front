import { NavLink } from 'react-router-dom'
import SearchBar from './components/searchbar/SearchBar'
import { Cart4, Globe } from 'react-bootstrap-icons'
import DropdownHelp from './components/dropdownhelp/DropdownHelp'

export default function Navbar() {

  return (
    <nav className="flex flex-row justify-between items-center w-full h-16 top-0 bg-white px-24">
      <NavLink to={'/'} className="flex flex-row justify-center items-center gap-1">
        <img src="assets/img/logo-estuaire.png" className="w-10 h-10" alt="" />
        <span className="logo-font">Estuaire Learning</span>
      </NavLink>

      <SearchBar />

      <ul className="flex flex-row justify-center items-center gap-6">

        <li>
          <NavLink to={''} className="flex flex-row items-center gap-1 text-black hover:text-blueColor hover:font-semibold transition-all">
            <Globe />
            <span>fr</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={''} className="text-black hover:text-blueColor hover:font-semibold transition-all">
            Cours gratuits en ligne
          </NavLink>
        </li>

        <DropdownHelp />

        <li>
          <NavLink to={''} className="border-2 text-black border-blueColor px-3 py-2 hover:bg-blueColor hover:text-grayColor hover:font-semibold transition-all rounded-sm">
            Espace Client
          </NavLink>
        </li>


        <li>
          <NavLink to={''} className="text-black hover:text-blueColor hover:font-semibold transition-all">
            <Cart4 className="text-2xl" />
          </NavLink>
        </li>

      </ul>

    </nav>
  )
}

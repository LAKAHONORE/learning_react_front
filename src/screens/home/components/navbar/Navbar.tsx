import { NavLink } from 'react-router-dom'
import SearchBar from './components/searchbar/SearchBar'
import { Cart4, Globe, List, X } from 'react-bootstrap-icons'
import DropdownHelp from './components/dropdownhelp/DropdownHelp'
import { useState } from 'react'

export default function Navbar() {

  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="flex flex-row justify-between items-center w-full h-16 top-0 sticky z-30 bg-white gap-2 px-2 md:px-24">
      <NavLink to={'/'} className="flex flex-row justify-center items-center gap-1">
        <img src="assets/img/logo-estuaire.png" className="w-10 h-10" alt="" />
        <span className="flex logo-font">Estuaire Learning</span>
      </NavLink>


        <div className='hidden md:flex'>
          <SearchBar />
        </div>



      <ul className="hidden md:flex flex-row justify-center items-center gap-6">



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


        <div className="flex md:hidden" onClick={()=>setMobileNav(mobileNav!)}>
          {
            mobileNav ? (
              <X className="text-2xl"/>
            ):(
              <List className="text-2xl"/>
            )
          }
        </div>
    </nav>
  )
}

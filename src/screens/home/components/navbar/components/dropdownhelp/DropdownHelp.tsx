import { useState } from 'react'
import { ChevronDoubleDown, ChevronDoubleUp, Envelope, QuestionLg, Telephone } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

export default function DropdownHelp() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button className="flex flex-row items-center text-colorWhite hover:text-blueColor hover:font-semibold gap-1 transition" onClick={() => setIsOpen(!isOpen)}>
       Besoin d'aide

        {isOpen ? (
          <ChevronDoubleUp className="ml-1" />
        ) : (
          <ChevronDoubleDown className="ml-1" />
        )}
      </button>

      {isOpen && (
        <ul className="md:absolute sm:relative z-10 py-2 bg-white p-2 mx-1 mt-6 rounded-md">

              <li className="text-black hover:text-blueColor mt-5 transition">
                <NavLink to={''} className="flex flex-row justify-start items-center gap-2">
                  <QuestionLg />
                  <span>Faqs</span>
                </NavLink>
              </li>


              <li className="text-black hover:text-blueColor mt-5 transition">
                <NavLink to={'tel:696523672'} className="flex flex-row justify-start items-center gap-2">
                  <Telephone />
                  <span>696 523 672</span>
                </NavLink>
              </li>


              <li className="text-black hover:text-blueColor mt-5 transition">
                <NavLink to={'mailto:serviceestuaires@gmail.com'} className="flex flex-row justify-start items-center gap-2">
                  <Envelope />
                  <span>Demander une aide technique</span>
                </NavLink>
              </li>

        </ul>
      )}

    </li>
  )
}

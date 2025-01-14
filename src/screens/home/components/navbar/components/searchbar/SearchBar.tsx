import React from 'react'
import { Search } from 'react-bootstrap-icons'

export default function SearchBar() {
  return (
      <form className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center border-[1px] border-blueColor p-2 gap-2 rounded-sm">
          <Search className="text-blueColor"/>
          <input type="text" name="search" placeholder="Rechercher ..." id="" className="outline-none bg-white" />
        </div>
      </form>
  )
}

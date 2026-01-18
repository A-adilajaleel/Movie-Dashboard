import React from 'react';
import { CiSearch } from "react-icons/ci";


const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    const text = e.target.value
    onSearch(text)
  }
  return (
    <div className="w-full max-w-md mx-auto my-6">
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-gray-300">
        <div className="grid place-items-center h-full w-12 text-gray-300">
         
          <CiSearch className="h-6 w-6" /> 
            
        </div>

        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search for a movie..." 
          onChange={handleChange }
        />
      </div>
    </div>
  )
}

export default SearchBar
import React from 'react'


const Navbar = ({ onCategoryChange, activeCategory }) => {
  return (
    <nav className="bg-gray-900 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className='text-2xl font-bold text-red-500'>Movie App</h1>

        <ul className="flex space-x-6">
        
          <li 
            onClick={() => onCategoryChange("popular")}
            className={`cursor-pointer hover:text-red-400 ${activeCategory === "popular" ? "text-red-500 font-bold" : ""}`}
          >
            Popular
          </li>


          <li 
            onClick={() => onCategoryChange("top_rated")}
            className={`cursor-pointer hover:text-red-400 ${activeCategory === "top_rated" ? "text-red-500 font-bold" : ""}`}
          >
            Top Rated
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
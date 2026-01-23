import React from 'react'

const MovieCard = ({ title, posterUrl, rating }) => {
  return (
    <div className="w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">


      <img
        src={posterUrl}
        alt={title}
        className="w-full h-64 sm:h-96 md:h-80 lg:h-96 object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="p-4">
        <h3 className="text-white text-base sm:text-lg font-bold">{title}</h3>
        <p className="text-yellow-400 text-sm sm:text-base">{rating}</p>
      </div>
    </div>
  )
}

export default MovieCard

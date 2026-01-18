import React from 'react'

const MovieCard = ({title,posterUrl,rating}) => {
  return (
    <div className="w-64 bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
        <img src={posterUrl}
        alt={title}
        className='w-full h-96 object-cover'
        loading="lazy" 
  decoding="async"
        />
        <div className='p-4'>
            <h3  className="text-white text-lg font-bold">{title}</h3>
            <p className='text-yellow-400'>{rating}</p>

        </div>
      
    </div>
  )
}

export default MovieCard

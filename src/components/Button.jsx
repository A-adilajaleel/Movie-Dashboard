import React from 'react'

const Button = ({text,color,onClick}) => {
  return (
    <div>
     <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-bold text-white transition duration-300 ${
        color === 'red' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
        {text}
      </button>
    </div>
  )
}

export default Button

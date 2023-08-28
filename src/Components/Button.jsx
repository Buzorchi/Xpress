import React from 'react'

const Button = ({ label, type, onClick, className, text }) => {
  return (
    <div>
      <div className={`${className}flex items-center gap-6 mt-10`}>
        <button className="bg-[#039BF0]  hover:bg-blue-400 text-white font-medium py-4 px-16 rounded focus:outline-none focus:shadow-[0 2px 8px 0 rgba(0 0 0 /2.25%)] " type={type} onClick={onClick}>
          {label}
        </button>
        <p className="inline-block align-baseline font-medium text-sm text-[#808080] hover:text-gray-300">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Button


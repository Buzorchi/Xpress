import React from 'react'

const Input = ({label, type, value, onChange, className, name}) => {
  return (
    <div>
      <label className=" mt-2 block text-[#1A1619] text-sm font-medium mb-2" htmlFor="businesCategory">
        {label}
      </label>
      {
        type === "password" ? (
            <div className='relative'>
                <input type={type} name={name} onChange={onChange} value ={value} className={`${className} border-[1px] rounded border-[#CCC] py-[0.9rem] px-3 w-full`}/>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-4 right-4">
                    <g id="ICON-EYES-OPEN">
                    <path id="Eye" d="M12 9.2C12.7233 9.2 13.417 9.495 13.9285 10.0201C14.4399 10.5452 14.7273 11.2574 14.7273 12C14.7273 12.7426 14.4399 13.4548 13.9285 13.9799C13.417 14.505 12.7233 14.8 12 14.8C11.2767 14.8 10.583 14.505 10.0715 13.9799C9.56006 13.4548 9.27273 12.7426 9.27273 12C9.27273 11.2574 9.56006 10.5452 10.0715 10.0201C10.583 9.495 11.2767 9.2 12 9.2ZM12 5C16.5455 5 20.4273 7.90267 22 12C20.4273 16.0973 16.5455 19 12 19C7.45455 19 3.57273 16.0973 2 12C3.57273 7.90267 7.45455 5 12 5ZM3.98182 12C5.48182 15.136 8.58182 17.1333 12 17.1333C15.4182 17.1333 18.5182 15.136 20.0182 12C18.5182 8.864 15.4182 6.86667 12 6.86667C8.58182 6.86667 5.48182 8.864 3.98182 12Z" fill="#606060"/>
                    </g>
                    </svg> 
                </button>
            </div> 
        ) : (
            <input className={`${className} shadow appearance-none border border-[#CCCCCC] rounded-sm w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="accountNumber" name={name} type={type} placeholder="" value={value} onChange={onChange}  />
        )
      }
        
    </div>
  )
}

export default Input

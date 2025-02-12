import React, { useState } from 'react'

const DropDownBar = ({placeholderText, categoryName, inputName, options, onChange, value, onClick}) => {
  return (
    <div className='flex items-center gap-2'>
      <label htmlFor={inputName} className='mr-4 capitalize text-sm'>{inputName}</label>
      <button className='border-[#0F3187] border-[1px] rounded-3xl w-fit relative px-4 py-2'>
        <input 
        list={categoryName} 
        id={inputName} 
        placeholder={placeholderText} 
        value={value} 
        style={{ width: `${placeholderText.length + 5}ch` }} 
        className="focus:outline-none capitalize text-[#393939] text-sm" 
        onChange={onChange}
        />

        <datalist id={categoryName}>
          {options && options.map((option, index) => {
                return (
                    option.english_name? <option key={index} value={option.english_name}/> : <option key={index} value={option}/>
                )
            }
            )}
         
        </datalist>

        <span className='bg-[#030A1B] absolute z-10 right-[1rem] top-0 h-full flex items-center pointer-events-none'>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.94757 9.77111C9.25267 10.0643 9.74733 10.0643 10.0524 9.77111L17.8649 2.26397C18.17 1.9708 18.17 1.49547 17.8649 1.2023C17.5598 0.909129 17.0652 0.909129 16.7601 1.2023L9.5 8.1786L2.23993 1.2023C1.93483 0.909129 1.44017 0.909129 1.13507 1.2023C0.829976 1.49547 0.829976 1.9708 1.13507 2.26397L8.94757 9.77111Z" fill="#EBFAFF"/>
          </svg>
        </span>
      </button>
     </div>
   
    
  )
}

export default DropDownBar;
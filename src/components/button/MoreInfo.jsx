import React from 'react'

const MoreInfo = ({buttonName, onClick}) => {
  return (
    <button
    onClick={onClick}
    className={`border-[#228EE5] border-[1px] text-[#EBFAFF] flex justify-center items-center gap-2 px-5 py-2 capitalize cursor-pointer hover:bg-[#228EE5] ${buttonName.toLowerCase() === "more info"? "rounded-3xl": "rounded-lg"}`}
    >
      {buttonName}

      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${buttonName.toLowerCase() === "more info"? "inline": "hidden"}`}>
      <path d="M8.00391 11.0041L13.0039 6.00415M13.0039 6.00415L8.00391 1.00415M13.0039 6.00415L1.00391 6.00415" stroke="#EBFAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </button>
  )
}

export default MoreInfo;
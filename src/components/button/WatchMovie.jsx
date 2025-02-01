import React from 'react'

const WatchMovie = ({buttonName, onClick, borderRad}) => {
  return (
    <button
     onClick={onClick}
     className={`bg-[#228EE5] border-[1px] text-[#EBFAFF] text-nowrap px-5 py-2 flex justify-center items-center gap-2 capitalize cursor-pointer border-[#228EE5]  hover:bg-transparent ${buttonName.toLowerCase() === "watch movie"? "rounded-3xl": "rounded-lg"}`}
     >
      <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.76838C0 0.817628 1.01933 0.214926 1.8524 0.673112L9.54612 4.90466C10.4096 5.37957 10.4096 6.62029 9.54612 7.0952L1.8524 11.3267C1.01933 11.7849 0 11.1822 0 10.2315V1.76838Z" fill="#EBFAFF"/>
      </svg>

      {buttonName}

    </button>
  )
}

export default WatchMovie;
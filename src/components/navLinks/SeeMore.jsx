import React from 'react'
import { NavLink } from 'react-router-dom'

const SeeMore = ({linkPath}) => {
  return (
    <NavLink to={linkPath} className="w-fit flex justify-center items-center text-2xl gap-2 text-[#228EE5] hover:underline">
      See More

      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1.5'>
        <path d="M8.00391 11.0041L13.0039 6.00415M13.0039 6.00415L8.00391 1.00415M13.0039 6.00415L1.00391 6.00415" stroke="#228EE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </NavLink>
  )
}

export default SeeMore;

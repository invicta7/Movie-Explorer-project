import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSearchBar = ({value, movieTitles, linkPath}) => {
  return (
    <form className='h-10 overflow-visible flex justify-end flex-row-reverse items-start w-fit group'>
        <NavLink to={`${linkPath}`} className="peer flex items-center h-full">
            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 25L18.0711 18.0711M18.0711 18.0711C19.8807 16.2614 21 13.7614 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C13.7614 21 16.2614 19.8807 18.0711 18.0711Z" stroke="#EBFAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </NavLink>
        <div className='w-80 max-h-10 overflow-visible hidden lg:inline'>
            <input type="text" value={value} placeholder='Search movie title' className= "w-80 px-4 py-2 focus:outline-none border-b-2 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-right"/>
            <div className='w-full h-fit bg-white flex flex-col '>
                {movieTitles && movieTitles.map((movieTitle, index) => {
                    return (
                        <span className='w-full px-4 py-2 text-black' key={index}>{movieTitle}</span>
                    )
                }
            )}
            </div>
        </div>
       
    </form>
  )
}

export default HeroSearchBar;
import React from 'react'
import HeroSearchBar from './HeroSearchBar';
import { NavLink } from 'react-router-dom';
import MovieIcon from '../assets/svgs/movie-icon.svg';
import StarIcon from '../assets/svgs/star-icon-favorite.svg'

const NavBar = () => {
  return (
    <nav className='w-full md:w-[85%] max-w-[1232px] px-4 py-0 rounded-2xl flex items-center justify-between h-[60px] mx-auto bg-[#1A19194D] backdrop-blur-[8px] border-[1px] border-[#228de557]'>
      <div className='flex gap-4 md:gap-8 items-center justify-start'>
        <NavLink to="/">
          <img src="/Logo- light 1.png" alt="website-logo" className='w-8 h-8'/>
        </NavLink>

        <NavLink to="/" className={`w-fit relative capitalize px-2 flex flex-col items-center group`}> 
            <h4 className='lg:inline hidden'>movies</h4>
            <img src={MovieIcon} alt="star-icon" className='inline lg:hidden w-6 h-6'/>
            <span className='w-4/5 h-1 bg-[#228EE5] blur-[2px] scale-x-0 group-hover:scale-x-100 group-[.active]:scale-x-100'></span>
        </NavLink>

        <NavLink to="/favorites" className={`w-fit relative capitalize px-2 flex flex-col items-center group`}> 
            <h4 className='lg:inline hidden'>Favorites</h4>
            <img src={StarIcon} alt="star-icon" className='w-6 h-6 inline lg:hidden'/>
            <span className='w-4/5 h-1 bg-[#228EE5] blur-[2px] scale-x-0 group-hover:scale-x-100 group-[.active]:scale-x-100'></span>
        </NavLink>
      </div>

      <div className='flex gap-4 md:gap-8 items-center justify-end'>
        <HeroSearchBar
        linkPath={'/search'}/>
        <NavLink className={`w-fit relative px-2 flex flex-col items-center group`} to=' '>
          <svg width="16" height="20" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00044 6C5.00044 2.68629 7.68673 0 11.0004 0C14.3142 0 17.0004 2.68629 17.0004 6C17.0004 9.31371 14.3142 12 11.0004 12C7.68673 12 5.00044 9.31371 5.00044 6Z" fill="#EBFAFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00210237 24.8071C0.105223 18.8208 4.98975 14 11.0004 14C17.0113 14 21.8959 18.821 21.9988 24.8075C22.0056 25.2046 21.7769 25.568 21.416 25.7336C18.2441 27.1891 14.7158 28 11.0009 28C7.28559 28 3.75702 27.1889 0.58487 25.7332C0.223977 25.5676 -0.00473673 25.2041 0.00210237 24.8071Z" fill="#EBFAFF"/>
          </svg>
          <span className='w-4/5 h-1 bg-[#228EE5] blur-[2px] scale-x-0 group-hover:scale-x-100 group-[.active]:scale-x-100'></span>
        </NavLink>
      </div>
      
    </nav>
  )
}

export default NavBar;

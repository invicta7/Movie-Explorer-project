import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const HeroSearchBar = ({}) => {
  const [queriedMovie, setQueriedMovie] = useState('')
  const [movieResults, setMovieResults] = useState([])
  const navigateTo = useNavigate()

  const SEARCH_API=`https://api.themoviedb.org/3/search/movie?api_key=bcc26b7e142a51f09bcf0a149964e33b&query=${queriedMovie}`

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateTo(`/search?search=${queriedMovie}`)
  } 
  
  const handleOtherSubmit = (movie) => {
    setQueriedMovie(movie.title)
    console.log(queriedMovie)
  }

  useEffect(()=> {
    fetch(SEARCH_API) // Fetch queried movie
    .then((result) => result.json())
    .then((data) => {
      setMovieResults(data.results.slice(0,5));
    });
  }, [queriedMovie])

  return (
    <form onSubmit={handleSubmit} className='h-10 overflow-visible flex justify-end flex-row-reverse items-start w-fit group'>
        <NavLink to={`/search?search=${queriedMovie}`} className="peer flex flex-col items-center justify-center h-full group">
            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 25L18.0711 18.0711M18.0711 18.0711C19.8807 16.2614 21 13.7614 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C13.7614 21 16.2614 19.8807 18.0711 18.0711Z" stroke="#EBFAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span className='w-4/5 h-1 bg-[#228EE5] blur-[2px] scale-x-0 group-hover:scale-x-100 group-[.active]:scale-x-100'></span>
        </NavLink>
        <div className='w-80 max-h-10 overflow-visible hidden lg:inline'>
            <input 
            type="text" 
            value={queriedMovie} 
            onChange={(e)=>setQueriedMovie(e.target.value)}
            placeholder='Search movie title' 
            className= "w-80 px-4 py-2 focus:outline-none border-b-2 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-right"/>
            <div className='w-full h-fit bg-white flex-col hidden group-hover:flex'>
                {movieResults && movieResults.map((movie, index) => {
                    return (
                        <button className='cursor-pointer w-full px-4 py-2 text-black text-left hover:bg-gray-400 text-nowrap text-ellipsis overflow-hidden' key={index} onClick={(movie)=>handleOtherSubmit(movie)}>{movie.title}</button>
                    )
                }
            )}
            </div>
        </div>
       
    </form>
  )
}

export default HeroSearchBar;
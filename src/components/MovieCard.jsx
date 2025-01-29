import React, { useState } from 'react'
import myImage from '../assets/images/i47IUSsN126K11JUzqQIOi1Mg1M.jpg'

const MovieCard = ({poster_path}) => {
  const [favorite, setFavorite] = useState(false);

  const handleisFavorite = () => {
    setFavorite(favorite => !favorite)
  }

  return (
    <div className={ `w-[208px] h-[296px] movie-card mt-8 ml-8 relative rounded-2xl rounded-tl-none overflow-hidden flex flex-col justify-end before:content-[''] before:absolute before:z-50 before:top-0 before:left-[34%] before:bg-transparent before:rounded-[50%] before:w-4 before:h-4 before:shadow-[-10px_-5px_0_#030A1B] after:content-[''] after:absolute after:top-[23%] after:bg-transparent after:w-4 after:h-4 after:rounded-[50%] after:shadow-[-10px_-5px_0_#030A1B] shadow-[0px_14px_42px_-8px_#7090B033]` }>
      
      <img src={myImage} alt="movie-poster" className='absolute'/>
      {/* <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="image" /> */}
      
      <button onClick={handleisFavorite} className='cursor-pointer w-16 h-16 outline-8 outline-[#030A1B] rounded-2xl absolute -top-0.25 -left-0.25 flex justify-center items-center backdrop-blur-[1px] hover:bg-[#00000091]'>
        <span className={`${favorite? 'hidden' : 'inline'} absolute w-1 h-6 bg-white rounded-2xl`}></span>
        <span className='w-6 h-1 bg-white rounded-2xl'></span>
      </button>

      <div className='w-full bg-gradient-to-t from-[#000000] to-[#00000010] ..." z-30 px-3 pb-3 pt-12 capitalize cursor-context-menu opacity-0'>
        <h3 className='text-2xl font-medium overflow-hidden overflow-ellipsis'>kraken</h3>
        <p className='font-extralight overflow-hidden overflow-ellipsis'>action/thriller</p>
      </div>
      
    </div>
  )
}

export default MovieCard;
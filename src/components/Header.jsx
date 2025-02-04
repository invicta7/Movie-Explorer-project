import React, { useEffect, useState } from 'react'
import WatchMovie from './button/WatchMovie';
import MoreInfo from './button/MoreInfo';
import { motion } from 'framer-motion';

const Header = () => {
  const API_URL_ONE= "https://api.themoviedb.org/3/discover/movie?api_key=bcc26b7e142a51f09bcf0a149964e33b";
  const API_URL_IMG= "https://image.tmdb.org/t/p/w1280";
  
  const [featuredMovies, setFeaturedMovies] =  useState([])
  const [currentIndex, setCurrentIndex] = useState(1)
  console.log(API_URL_ONE, featuredMovies)

  useEffect(()=> {
    fetch(API_URL_ONE)  //for hero section
    .then((res)=>res.json())
    .then(data=>{
        setFeaturedMovies(data.results.slice(0,4))
    })
  }, [])

//   const showNextMovie = () => {
//     setCurrentIndex(currentIndex === featuredMovies.length - 1 ? 0 : currentIndex + 1)
//   }  

// useEffect(()=> {
//   setTimeout(()=>{
//         showNextMovie();
//     }, 5000)
// })

  return (
    <section className='relative flex items-end h-[120vh] lg:max-h-[762px] max-h-[1024px]'>
      {featuredMovies && featuredMovies.map((featuredMovie,index)=> {
        return (
          <>
          <motion.div
          initial = {{scale: 0.9}}
          whileHover = {{scale: 1.1}}
          key={featuredMovie.id} className={`${currentIndex == index? "block" :"hidden"} relative h-full w-full flex items-end justify-center overflow-hidden`}>
              
              <picture className='w-full absolute -z-10 top-0'>
                <source media="(max-width:64rem)" srcSet={API_URL_IMG+featuredMovie.poster_path}/>
                <img src={API_URL_IMG+featuredMovie.backdrop_path} alt="movie-poster" className='w-full'/>
              </picture>

              <div className='w-full h-full absolute -z-8 bg-gradient-to-t from-[#030A1B] via-[#030a1b] md:via-[#030a1b91] to-transparent'></div>

              <div className='w-full md:w-[85%] md:max-w-[1232px] pb-6 px-4 lg:px-0 flex items-center lg:items-end flex-col-reverse lg:flex-row lg:justify-between relative'>

                {/* movie text area */}
                <div className='w-full h-80 lg:h-auto lg:w-2/5 pb-6'>
                  <h1 className='text-5xl font-bold mb-4'>{featuredMovie.title}</h1>
                  <p className='text-left'>{featuredMovie.overview}</p>
                  <span className='flex gap-4 items-center justify-left pt-4'>
                    <WatchMovie 
                      buttonName = {"watch movie"}
                    />
                    <MoreInfo
                      buttonName = {"more info"}
                    />
                  </span>
                </div>

                {/* indicator area */}
                <div className='w-full lg:w-fit px-8 z-40 flex items-center justify-start mb-8 lg:mb-0'>
                  {featuredMovies && featuredMovies.map((featuredMovie, index)=> {
                    return <button key={featuredMovie.id} onClick={()=>setCurrentIndex(index)} className={`cursor-pointer flex items-start justify-center w-25 h-25 md:w-35 md:h-35 overflow-hidden rounded-2xl -mx-2 relative border-[1px] border-[#228de557] nth-3:z-[20] ${currentIndex==index? "z-50 w-40 h-40 md:w-50 md:h-50": " "}`}>
                    <img src={API_URL_IMG+featuredMovie.poster_path} alt="movie-poster"/>
                    <span className={`w-full h-full absolute pointer-events-none ${currentIndex==index? " ": "bg-[#030a1b86]"}`}></span>
                  </button>
                  })}
                </div>

              </div>
            
          </motion.div>
          </>
        )        
      })} 
      
       
    </section>
  )
}

export default Header;

import React, { useState, useEffect, useRef } from "react";
import SeeMore from "./navLinks/SeeMore";
import Genre from "./button/Genre";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

const MovieList = () => {
  const [getMovies, setGetMovies] = useState([]);
  const [getGenres, setGetGenres] = useState([]);
  const genreContainerRef = useRef(null); // Reference for genre scrolling
  const [getSelectedGenre, setGetSelectedGenre] = useState([]);

  

  const API_URL_ONE =
    `https://api.themoviedb.org/3/discover/movie?api_key=bcc26b7e142a51f09bcf0a149964e33b&with_genres=${getSelectedGenre.join(',')}`;

  const GENRE_API =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=bcc26b7e142a51f09bcf0a149964e33b";

  const handleGenreSelect = (id) => {
      if (getSelectedGenre.includes(id)) {
        setGetSelectedGenre((prevIds)=> prevIds.filter(prevId => prevId !== id))
        } 
        
        else{
            setGetSelectedGenre((prevIds)=>[...prevIds, id])
        }
      }  


  useEffect(() => {
    fetch(API_URL_ONE) //for hero section
      .then((res) => res.json())
      .then((data) => {
        setGetMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(GENRE_API)
      .then((result) => result.json())
      .then((data) => {
        setGetGenres(data.genres);
        console.log(getGenres);
      });
  }, []);


  //Get movies based on their respective genre
  useEffect(() => {
    fetch(API_URL_ONE)
      .then((res) => res.json())
      .then((data) => {
        setGetMovies(data.results);
      });
  }, [getSelectedGenre]);




   // Scroll handlers for genre navigation
   const scrollLeft = () => {
    if (genreContainerRef.current) {
      genreContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (genreContainerRef.current) {
      genreContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  

  return (
    <section className="max-w-[1232px] mx-auto px-4"  >
      <div className="text-2xl flex justify-between mb-8" >
        <h1>Movies</h1>
        <SeeMore />
      </div>

      {/* Genre Navigation */}
      <div className="relative w-full flex items-center justify-between mb-10">
        <button
          onClick={scrollLeft}
          className="p-2  z-10"
        >
          <svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.929952 8.94757C0.682252 9.25267 0.682252 9.74733 0.929952 10.0524L7.27269 17.8649C7.52039 18.17 7.92199 18.17 8.16969 17.8649C8.41739 17.5598 8.41739 17.0652 8.16969 16.7601L2.27545 9.5L8.16969 2.23993C8.41739 1.93483 8.41739 1.44017 8.16969 1.13507C7.92199 0.829976 7.52039 0.829976 7.27269 1.13507L0.929952 8.94757Z" fill="#EBFAFF"/>
          </svg>
        </button>

        <div 
        ref={genreContainerRef}
        className="flex overflow-hidden no-scrollbar whitespace-nowrap scroll-smooth w-[95%] px-10"
        >
        {getGenres &&
        getGenres.map((genre, index) => {
          return <Genre key={index} id={genre.id} handleGenreSelect={handleGenreSelect} genreName={genre.name} />;
        })}
        </div>
    
        <button
          onClick={scrollRight}
          className=" p-2 z-10"
        >
          <svg width="8" height="19" viewBox="0 0 8 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.47239 8.94757C7.72009 9.25267 7.72009 9.74733 7.47239 10.0524L1.12965 17.8649C0.88195 18.17 0.480349 18.17 0.23265 17.8649C-0.01505 17.5598 -0.01505 17.0652 0.23265 16.7601L6.12689 9.5L0.23265 2.23993C-0.0150494 1.93483 -0.0150494 1.44017 0.23265 1.13507C0.48035 0.829976 0.88195 0.829976 1.12965 1.13507L7.47239 8.94757Z" fill="#EBFAFF"/>
          </svg>
        </button>
      </div>

     
      
      <div className="w-full flex items-start justify-center gap-8 scroll-smooth scrollbar-hide flex-wrap relative">
        {getMovies &&
          getMovies.map((movie, index) => {
            return (
              <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                <MovieCard key={movie.id} {...movie} getGenres={getGenres} />
              </motion.div>
            );
          })}
      </div>
    </section>
  );
};

export default MovieList;

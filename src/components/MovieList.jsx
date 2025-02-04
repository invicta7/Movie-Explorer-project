import React, { useState, useEffect } from "react";
import SeeMore from "./navLinks/SeeMore";
import Genre from "./button/Genre";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

const MovieList = () => {
  const [getMovies, setGetMovies] = useState([]);
  const API_URL_ONE =
    "https://api.themoviedb.org/3/discover/movie?api_key=bcc26b7e142a51f09bcf0a149964e33b";


  useEffect(() => {
    fetch(API_URL_ONE) //for hero section
      .then((res) => res.json())
      .then((data) => {
        setGetMovies(data.results);
      });
  }, []);

  return (
    <section>
      <div className="text-2xl flex justify-between">
        <h1>Movies</h1>
        <SeeMore />
      </div>
      <div className="flex justify-start absolute w-full h-[20px]">
      <Genre/>
      </div>
      <motion.div 
      initial={{scale: 0.9}}
      whileHover={{scale: 1}}
      className="flex items-center justify-between  overflow-x-auto scroll-smooth scrollbar-hide flex-wrap relative">
        {getMovies &&
          getMovies.map((movie, index ) =>  {
            return <MovieCard key={movie.id} {...movie} />;
          })}
      </motion.div>


    </section>
  );
};

export default MovieList;

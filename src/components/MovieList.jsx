import React, { useState, useEffect } from "react";
import SeeMore from "./navLinks/SeeMore";
import Genre from "./button/Genre";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

const MovieList = () => {
  const [getMovies, setGetMovies] = useState([]);
  const [getGenres, setGetGenres] = useState([]);

  const API_URL_ONE =
    "https://api.themoviedb.org/3/discover/movie?api_key=bcc26b7e142a51f09bcf0a149964e33b";

  const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=bcc26b7e142a51f09bcf0a149964e33b";

  useEffect(() => {
    fetch(API_URL_ONE) //for hero section
      .then((res) => res.json())
      .then((data) => {
        setGetMovies(data.results);
      });
  }, []);

  useEffect(()=> {
    fetch(GENRE_API)
      .then((result) => result.json())
      .then((data) => {
        setGetGenres(data.genres);
        console.log(getGenres)
      });
  }, [])

  return (
    <section className="max-w-[1232px] mx-auto px-4">
      <div className="text-2xl flex justify-between mb-8">
        <h1>Movies</h1>
        <SeeMore />
      </div>
      <div className="flex justify-start w-full mb-12 overflow-x-auto">
        {
          getGenres && getGenres.map((genre)=> {
            return <Genre key={genre.id} genreName={genre.name}/>
          })
        }
      
      </div>
      <div className="w-full flex items-start justify-center gap-8 scroll-smooth scrollbar-hide flex-wrap relative">
        {getMovies && getMovies.map((movie, index ) =>  {
            return (
            <motion.div 
              initial={{scale: 1}}
              whileHover={{scale: 1.1}}><MovieCard key={movie.id} {...movie} getGenres={getGenres} /> 
            </motion.div>
            )
          })}
     </div>


    </section>
  );
};

export default MovieList;

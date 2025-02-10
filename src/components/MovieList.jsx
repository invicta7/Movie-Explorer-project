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
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const API_URL_ONE =
    `https://api.themoviedb.org/3/discover/movie?api_key=bcc26b7e142a51f09bcf0a149964e33b&with_genres=${getSelectedGenre.join(',')}`;


  const GENRE_API =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=bcc26b7e142a51f09bcf0a149964e33b";


  const handleGenreSelect = (id) => {
    setGetSelectedGenre((prevIds) =>
      prevIds.includes(id) ? prevIds.filter((prevId) => prevId !== id) : [...prevIds, id]
    );
  };

  useEffect(() => {
    fetch(API_URL_ONE) // Fetch Movies
      .then((res) => res.json())
      .then((data) => {
        setGetMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(GENRE_API) // Fetch Genres
      .then((result) => result.json())
      .then((data) => {
        setGetGenres(data.genres);
      });
  }, []);


  //Get movies based on their respective genre
  useEffect(() => {
    fetch(API_URL_ONE) // Fetch Movies based on Selected Genre
      .then((res) => res.json())
      .then((data) => {
        setGetMovies(data.results);
      });
  }, [getSelectedGenre]);

  // Function to check scroll position
  const checkScroll = () => {
    if (genreContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = genreContainerRef.current;
      setAtStart(scrollLeft === 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  // Attach scroll listener when genres load
  useEffect(() => {
    const container = genreContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      return () => {
        container.removeEventListener("scroll", checkScroll);
      };
    }
  }, [getGenres]);

  // Listen for window resize events
  useEffect(() => {
    window.addEventListener("resize", checkScroll);
    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // Scroll Handlers
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
    <section className="max-w-[1232px] mx-auto px-4">
      <div className="text-2xl flex justify-between mb-8">
        <h1>Movies</h1>
        <SeeMore />
      </div>

      {/* Genre Navigation */}

      <div className="relative w-full flex items-center justify-between mb-18 mt-4">
        {/* Left Arrow */}
        <motion.button
          onClick={scrollLeft}
          className="p-2 rounded-full z-10"
          animate={{
            opacity: atStart ? 0.3 : 1,
            scale: atStart ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
          disabled={atStart}
        >
         <svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.929952 8.94757C0.682252 9.25267 0.682252 9.74733 0.929952 10.0524L7.27269 17.8649C7.52039 18.17 7.92199 18.17 8.16969 17.8649C8.41739 17.5598 8.41739 17.0652 8.16969 16.7601L2.27545 9.5L8.16969 2.23993C8.41739 1.93483 8.41739 1.44017 8.16969 1.13507C7.92199 0.829976 7.52039 0.829976 7.27269 1.13507L0.929952 8.94757Z" fill="#EBFAFF"/>
         </svg> 
        </motion.button>

        <div
          ref={genreContainerRef}
          className="flex overflow-hidden no-scrollbar whitespace-nowrap scroll-smooth w-[90%] px-0 "

        >
          {getGenres &&
            getGenres.map((genre, index) => (
              <Genre key={index} id={genre.id} handleGenreSelect={handleGenreSelect} genreName={genre.name} />
            ))}
        </div>

        {/* Right Arrow */}
        <motion.button
          onClick={scrollRight}

          className="p-2 rounded-full z-10"
          animate={{
            opacity: atEnd ? 0.3 : 1,
            scale: atEnd ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
          disabled={atEnd}
        >
          <svg width="8" height="19" viewBox="0 0 8 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.47239 8.94757C7.72009 9.25267 7.72009 9.74733 7.47239 10.0524L1.12965 17.8649C0.88195 18.17 0.480349 18.17 0.23265 17.8649C-0.01505 17.5598 -0.01505 17.0652 0.23265 16.7601L6.12689 9.5L0.23265 2.23993C-0.0150494 1.93483 -0.0150494 1.44017 0.23265 1.13507C0.48035 0.829976 0.88195 0.829976 1.12965 1.13507L7.47239 8.94757Z" fill="#EBFAFF"/>
          </svg>

        </motion.button>

      </div> 
      

      {/* Movies Display */}
      <div className="w-full flex items-start justify-center gap-8 scroll-smooth scrollbar-hide flex-wrap relative">
        {getMovies &&

          getMovies.map((movie) => (
            <div key={movie.id} whileHover={{ scale: 1.05 }}>
              <MovieCard {...movie} getGenres={getGenres} />
            </div>
          ))}

              
      </div>
    </section>
  );
};

export default MovieList;
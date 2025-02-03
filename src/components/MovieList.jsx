import React, { useState, useEffect } from "react";
import SeeMore from "./navLinks/SeeMore";
import Genre from "./button/Genre";
import MovieCard from "./MovieCard";

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
      <div>
        <h1>Movies</h1>
        <SeeMore />
      </div>
      <div>
        <Genre />
      </div>
      <div>
        {getMovies &&
          getMovies.map((movie, index) => {
            return <MovieCard key={movie.id} {...movie} />;
          })}
      </div>
    </section>
  );
};

export default MovieList;

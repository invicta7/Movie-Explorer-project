import { div } from "framer-motion/client";
import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

const FavoriteList = ({ savedFavorite, getGenres, handleFavoriteClick }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-fit overflow-hidden flex  mb-18 gap-10">
        {savedFavorite &&
          savedFavorite.map((movie) => {
            return (
              <MovieCard
                {...movie}
                getGenres={getGenres}
                handleFavoriteClick={handleFavoriteClick}
                movie={movie}
                favoriteFilm={savedFavorite}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FavoriteList;

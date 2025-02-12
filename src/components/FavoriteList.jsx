import { div } from "framer-motion/client";
import React, { useState } from "react";
import { useEffect } from "react";

const FavoriteList = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

 

  return (
    <section>
      {favoriteMovies &&
        favoriteMovies.map((favoriteMovie) => {
          <div>{favoriteMovie.id}</div>;
        })}
    </section>
  );
};

export default FavoriteList;

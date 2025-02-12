import React from "react";
import NavBar from "../components/NavBar";
import FavoriteList from "../components/FavoriteList";

const FavoritesMovie = () => {
  return (
    <div>
      <NavBar />
      <h1>FavoritesMovie</h1>
      <FavoriteList />
    </div>
  );
};

export default FavoritesMovie;

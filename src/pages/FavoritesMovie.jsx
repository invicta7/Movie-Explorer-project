import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import FavoriteList from "../components/FavoriteList";
import MovieCard from "../components/MovieCard";

const FavoritesMovie = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Function to remove a movie from favorites
  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Favorite Movies
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-500">No favorite movies yet.</p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
              // <div  className="relative group">

              //   {/* Remove button */}
              //   {/* <button
              //     onClick={() => removeFavorite(movie.id)}
              //     className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              //   >
              //     Remove
              //   </button> */}
              // </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <h1>FavoritesMovie</h1>
      </div>

      <FavoriteList />
    </div>
  );
};

export default FavoritesMovie;

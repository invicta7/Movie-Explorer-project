import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

const FavoritesMovie = () => {
  const [favorites, setFavorites] = useState([]);
   const [getGenres, setGetGenres] = useState([]);
   const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=bcc26b7e142a51f09bcf0a149964e33b";

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    fetch(GENRE_API) // Fetch Genres
      .then((result) => result.json())
      .then((data) => {
        setGetGenres(data.genres);
      });
  }, []);

  // Function to remove a movie from favorites
  const removeFavorite = (movie) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
   
    setFavorites((prevFavs) => {
      const favorites = Array.isArray(prevFavs) ? prevFavs : []; // Ensure it's an array
      const updatedFavorites = favorites.filter((prevFav) => prevFav.id !== movie.id);
      console.log(favorites)
      return updatedFavorites;
    });
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="max-w-[1232px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mt-20 mb-10 ml-8">
          Favorite Movies
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-500">No favorite movies yet.</p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} {...movie} getGenres={getGenres} handleFavoriteClick={removeFavorite} favoriteFilm={favorites} movie={movie}/>
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
      <Footer/>
    </div>
  );
};

export default FavoritesMovie;

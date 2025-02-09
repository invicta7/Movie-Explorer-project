import {React, useState} from 'react'
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieCard from '../components/MovieCard';

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "bcc26b7e142a51f09bcf0a149964e33b";

  const fetchMovies = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
    );
    const data = await response.json();
    setMovies(data.results || []);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <NavBar/>
      <h1 className="text-3xl font-bold text-center mb-6">Search Movies</h1>
      <SearchBar onSearch={fetchMovies} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="border p-4 rounded-lg bg-[#1A19194D]">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded-lg"
              />


              <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchMovie;

 /*const SearchMovie = () => {
  return (
    <div>
      <NavBar/>
      SearchMovie
    </div>
  )
}

export default SearchMovie;*/
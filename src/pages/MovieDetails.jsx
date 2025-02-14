
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import WatchMovie from "../components/button/WatchMovie";
import MoreInfo from "../components/button/MoreInfo";
import Footer from "../components/Footer";
import Genre from "../components/button/Genre";
import { div } from "framer-motion/client";

const API_KEY = "bcc26b7e142a51f09bcf0a149964e33b";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1280";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [backdropImages, setBackdropImages] = useState([]);
  const [movieLogos, setMovieLogos] = useState([])
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState(null);
  const {id} = useParams();
  

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,images`
        );
        const data = await res.json();
        setMovie(data);
        console.log(data)

        // Get Trailer (first YouTube trailer)
        if (data.videos?.results.length > 0) {
          const trailerData = data.videos.results.find((vid) =>
            vid.type.includes("Trailer")
          );
          setTrailer(trailerData ? trailerData.key : null);
        }

        // Get Cast members
        setCast(data.credits?.cast || []);

        // Get Director from crew
        const directorData = data.credits?.crew.find(
          (person) => person.job === "Director"
        );
        setDirector(directorData);
        console.log(director)

        // Get 5 backdrop snippet images
        setBackdropImages(data.images?.backdrops.slice(1, 6) || []);

        // Get image logos
        setMovieLogos(data.images?.logos[0] || []);

      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const formatRuntime = () => {
    if(movie) {
      const runtimeMinutes = movie.runtime
      if (runtimeMinutes >= 60) {
        const hours = Math.floor(runtimeMinutes / 60)
        const mins = runtimeMinutes % 60
        return `${hours}h ${mins}m`
      }else {
          return `${runtimeMinutes}m`
      }
    }
   
  }
  const formattedRunTime = formatRuntime();

  if (!movie)
    return <div className="text-white text-center p-8">Loading...</div>;

  return (
    <div className="bg-[#030A1B] text-white min-h-screen relative h-[120vh] lg:max-h-[762px] max-h-[1024px]">
      {/* Backdrop Image Section */}
      <div className="relative w-full h-full">
        <NavBar/>
        {backdropImages?.length >0? (
          <img
            src={`${IMAGE_BASE_URL}${backdropImages[0].file_path}`}
            alt={movie.title}
            className="absolute lg:w-full h-full object-cover"
          />
        ) : (
          <div className="absolute w-full h-full bg-[#030A1B]"></div>
        )}

        {/* Movie Info Overlay on the Mid-Left */}
        <div className="w-full h-full absolute bg-gradient-to-r from-[#030A1B] via-transparent to-[#030A1B] flex justify-center">
          <div className="w-full md:w-[85%] h-full max-w-[1232px] flex flex-col lg:flex-row lg:items-end pb-60 justify-end lg:justify-between p-4 lg:p-0 lg:pb-60">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-5xl font-bold mb-2">{movie.title}</h1>
              <p className="mb-1 text-[1.25rem]">{formattedRunTime} - {new Date(movie.release_date).getFullYear()} - {" "}
                {movie.production_countries && movie.production_countries[0]
                  ? movie.production_countries[0].name
                  : "N/A"}</p>
              <p className="mb-1 font-medium text-[1.25rem]">Ratings: {movie.vote_average}</p>
            </div>
            
            <div className="mt-8 lg:mt-0 flex flex-col items-start lg:items-center gap-8">
              {movieLogos? (
                <div className="w-100 object-cover hidden md:block">
                <img
                  src={`${IMAGE_BASE_URL}${movieLogos.file_path}`}
                  alt={movie.title}
                  className="w-full object-cover"
                />
              </div>
              ): 
               null}
             
              <div className="flex gap-6 justify-center">
              <WatchMovie buttonName = {"watch now"} onClick={() => setShowTrailer(true)} />
              <MoreInfo buttonName = {"Preview"}/>
              </div>
              
            </div>    
          </div>
        </div>

        {/* Snippet Carousel at Bottom with Backdrop Blur */}
        {backdropImages.length > 0 && (
          <div className="w-full absolute -bottom-20 backdrop-blur-md p-2 rounded-lg flex flex-wrap md:flex-nowrap justify-center gap-4 items-center overflow-hidden">
            {backdropImages.map((img, index) => (
              <div className="w-[100px] h-[100px] md:min-w-[240px] md:h-[240px] rounded-lg flex justify-center items-start overflow-hidden relative">
                <img
                key={index}
                src={`${IMAGE_BASE_URL}${img.file_path}`}
                alt={`Scene ${index + 1}`}
                className="h-full object-cover"
                />
                <span className={`w-full h-full absolute pointer-events-none bg-[#030a1b38]`}></span>
              </div>
              
            ))}
          </div>
        )}
      </div>

      {/* Sections Below the Carousel */}
      <div className="mx-auto p-4 max-w-[1232px] mt-30">
        {/* About / Overview Section */}
        <div className="bg-[#030A1B] p-4 rounded-lg">
          <h2 className="text-5xl font-bold mb-4">About {movie.title}</h2>
          <p className="font-medium text-[1.25rem]">{movie.overview}</p>
        </div>

        {/* Genre Section */}
        <div className="bg-[#030A1B] p-4 rounded-lg mt-8">
          <h2 className="text-5xl font-bold mb-8">Genres</h2>
          <div className="flex flex-wrap gap-6">
            {movie.genres?.map((genre) => (
              <button
                key={genre.id}
                className="text-nowrap py-2 px-5 last-child:mr-0 rounded-3xl border-solid border-[1px] cursor-pointer capitalize border-[#EC5BAA] bg-[#EC5BAA]"
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>

        {/* Cast Section */}
        <div className="bg-[#030A1B] p-4  mt-8">
          <h2 className="text-5xl font-bold mb-8">Characters</h2>
          <div className="flex gap-12 items-start justify-left overflow-auto">
            {cast.map((actor) => (
              <div key={actor.id} className="text-center gap-2 flex justify-center items-center flex-col">
                {actor.profile_path ? (
                  <div className="w-[166px] h-[166px] rounded-full overflow-hidden flex items-center justify-center">
                     <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    className="w-full object-cover "
                    />
                  </div>
                 
                ) : (
                  <div className="w-[166px] h-[166px] bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
                    N/A
                  </div>
                )}
                <p className="my-4 text-xl">{actor.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Director Section */}
        <div className="bg-[#030A1B] p-4 rounded-lg mt-5">
          <h2 className="text-[48px] font-bold mb-2">Director</h2>
          <div className="text-center gap-2 flex items-start justify-center flex-col">
            {director.profile_path ? (
              <div className="w-[166px] h-[166px] rounded-full overflow-hidden flex items-center justify-center">
              <img src={`https://image.tmdb.org/t/p/w200${director.profile_path}`} alt={director.name} />
              </div>
            ): 
            (
              <div className="w-[166px] h-[166px] bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
                N/A
              </div>
            ) }
            <p className="my-4 text-xl">{director ? director.name : "N/A"}</p>
          </div>
        </div>
        <Footer/>
      </div>

      {/* Trailer Modal */}
      {showTrailer && trailer && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000c9] flex items-center justify-center z-5000000">
          <div className="w-4/5 h-[85%]">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
              title="Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button 
              onClick={() => setShowTrailer(false)} 
              className="absolute top-4 right-5 font-bold px-4 py-2 rounded-full cursor-pointer"
            >
              <span className='w-1 h-6 bg-white rounded-2xl rotate-45 absolute'></span>
              <span className='w-1 h-6 bg-white rounded-2xl -rotate-45 absolute'></span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;




// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const API_KEY = "bcc26b7e142a51f09bcf0a149964e33b";
// const BASE_URL = "https://api.themoviedb.org/3";
// const MovieDetail = () => {
//   const [movie, setMovie] = useState(null);
//   const [trailer, setTrailer] = useState(null);
//   const [cast, setCast] = useState([]);
//   const [similarMovies, setSimilarMovies] = useState([]);

//   const {id} = useParams();

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       const res = await fetch(
//         `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,similar`
//       );
//       const data = await res.json();
//       setMovie(data);
//       console.log(movie)

//       // Get Trailer (First YouTube video)
//       const trailerData = data.videos?.results?.find((vid) =>
//         vid.type.includes("Trailer")
//       );
//       setTrailer(trailerData ? trailerData.key : null);

//       // Get Cast (Limit to 5)
//       setCast(data.credits?.cast.slice(0, 5) || []);

//       // Get Similar Movies (Limit to 10)
//       setSimilarMovies(data.similar?.results.slice(0, 10) || []);
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (!movie) return <div className="text-white text-center">Loading...</div>;

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Movie Background Image */}
//       <div className="relative h-[80vh] flex items-center justify-center">
//         <img
//           src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
//           alt={movie.title}
//           className="absolute w-full h-full object-cover opacity-50"
//         />
//         <div className="relative z-10 text-center px-5">
//           <h1 className="text-4xl font-bold">{movie.title}</h1>
//           <p className="text-gray-300 mt-2 max-w-xl mx-auto">{movie.overview}</p>
//           <div className="mt-4 flex justify-center space-x-4">
//             <button className="bg-red-600 px-6 py-2 rounded-full text-lg font-semibold">
//               ▶ Play
//             </button>
//             <button className="bg-gray-800 px-6 py-2 rounded-full text-lg">
//               + My List
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Trailer Section */}
//       {trailer && (
//         <div className="my-8 flex justify-center">
//           <iframe
//             className="w-[80%] h-64 md:h-96"
//             src={`https://www.youtube.com/embed/${trailer}`}
//             title="Trailer"
//             allowFullScreen
//           ></iframe>
//         </div>
//       )}

//       {/* Cast Section */}
//       <div className="px-5 mt-8">
//         <h2 className="text-2xl font-bold">Top Cast</h2>
//         <div className="flex overflow-x-scroll mt-4 space-x-4">
//           {cast.map((actor) => (
//             <div key={actor.id} className="min-w-[120px]">
//               <img
//                 src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
//                 alt={actor.name}
//                 className="w-28 h-28 rounded-full object-cover"
//               />
//               <p className="text-center text-sm mt-2">{actor.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Similar Movies Section */}
//       <div className="px-5 mt-8">
//         <h2 className="text-2xl font-bold">Similar Movies</h2>
//         <div className="flex overflow-x-scroll mt-4 space-x-4">
//           {similarMovies.map((movie) => (
//             <div key={movie.id} className="min-w-[150px]">
//               <img
//                 src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                 alt={movie.title}
//                 className="w-36 rounded-md"
//               />
//               <p className="text-center text-sm mt-2">{movie.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetail;





// import React, { useEffect } from 'react'
// import NavBar from '../components/NavBar'
// // import MovieCard from '../components/MovieCard';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import WatchMovie from '../components/button/WatchMovie';
// import MoreInfo from '../components/button/MoreInfo';

// const MovieDetails = () => {
//   const [currentMovie, setCurrentMovie] = useState(null);
//   const handleMovieClick = (movie) => {
//     setCurrentMovie(movie);
//   };
//   const {id} = useParams();

//   const movie_API_KEY = "bcc26b7e142a51f09bcf0a149964e33b"
//   // const GENRE_API =
//   // `https://api.themoviedb.org/3/genre/movie/${id}?api_key=${movie_API_KEY}`;

   
//     const movie_URL_IMAGE = "https://image.tmdb.org/t/p/w1280"

// useEffect(()=>{
//   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${movie_API_KEY}`)
//   .then((response)=> response.json())
//   .then((data)=>setCurrentMovie(data)); 
  
//   // fetch(GENRE_API) // Fetch Genres
//   // .then((result) => result.json())
//   // .then((data) => {
//   //   setGetGenres(data.genres);
//   // });
// }, [id]);
// console.log(setCurrentMovie);

//   return (
//     <div className='h-[100vh] lg:max-h-[762px] max-h-[1024px] p-20' >
//       <NavBar/>
     
//       {/* <MovieCard movie={currentMovie} onClick={()=> handleMovieClick(currentMovie)}/> */}
//       {currentMovie && 
//       <div className=''> 
//         <img src={movie_URL_IMAGE+currentMovie.backdrop_path} alt={currentMovie.title} className='absolute'/>
//         <p className='relative flex m-30 justify-start p-40 '>{} {currentMovie.release_date} {currentMovie.origin_country}</p>
//         <div className='z-10'>
//         <h1 className='font-bold text-[72px]'>About {currentMovie.title}</h1>
//       <p className='font-medium text-[24px]'>{currentMovie.overview}</p>
//       <p>{currentMovie.vote_average}</p>
//       <span className='flex gap-4 items-center justify-left pt-4'>
//        <WatchMovie buttonName = {"watch movie"}/>
//        <MoreInfo  buttonName = {"Preview"}/>
//        </span>
//        {/* <p>{} {currentMovie.release_date} {currentMovie.origin_country}</p> */}
//       </div>
//       </div>}
//     </div>
//   )
// }

// export default MovieDetails;
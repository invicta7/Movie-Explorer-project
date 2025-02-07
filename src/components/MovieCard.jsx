import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion
import myImage from "../assets/images/i47IUSsN126K11JUzqQIOi1Mg1M.jpg";
import Genre from "./button/Genre";

const MovieCard = ({ id, poster_path, title, genre_ids, getGenres }) => {
  const [favorite, setFavorite] = useState(false);

  const handleisFavorite = () => {
    setFavorite((favorite) => !favorite);
  };

  return (
    <div
      className={`w-[208px] h-[296px] movie-card relative rounded-2xl rounded-tl-none overflow-hidden flex flex-col justify-end before:content-[''] before:absolute before:z-50 before:top-0 before:left-[34%] before:bg-transparent before:rounded-[50%] before:w-4 before:h-4 before:shadow-[-10px_-5px_0_#030A1B] after:content-[''] after:absolute after:top-[23%] after:bg-transparent after:w-4 after:h-4 after:rounded-[50%] after:shadow-[-10px_-5px_0_#030A1B] shadow-[0px_14px_42px_-8px_#7090B033]`}
    >
      {/* Image with Framer Motion for zoom effect */}
      <motion.img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="movie poster"
        className="absolute"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}  // Zoom in effect on hover
        transition={{ duration: 0.8 }}
      />

      <button
        onClick={handleisFavorite}
        className="cursor-pointer w-16 h-16 outline-8 outline-[#030A1B] rounded-2xl absolute -top-0.25 -left-0.25 flex justify-center items-center backdrop-blur-[1px] hover:bg-[#00000091]"
      >
        <span
          className={`${
            favorite ? "hidden" : "inline"
          } absolute w-1 h-6 bg-white rounded-2xl`}
        ></span>
        <span className="w-6 h-1 bg-white rounded-2xl"></span>
      </button>

      <div className="w-full bg-gradient-to-t from-[#000000] to-[#00000010] z-30 px-3 pb-3 pt-12 capitalize cursor-context-menu opacity-100">
        <h3 className="text-2xl font-medium overflow-hidden overflow-ellipsis">
          {title}
        </h3>
        <div className="font-extralight overflow-hidden overflow-ellipsis flex flex-nowrap">
          {genre_ids.map((id, index) => {
            const relevantGenre = getGenres.find((genre) => genre.id === id);
            return relevantGenre
              ? index < 2
                ? index === 1
                  ? <p key={relevantGenre.id}>/{relevantGenre.name}</p>
                  : <p key={relevantGenre.id}>{relevantGenre.name}</p>
                : null
              : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;









// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { PlayCircle } from "lucide-react"; // You can use any play icon library you prefer
// import Genre from "./button/Genre";
// import myImage from "../assets/images/i47IUSsN126K11JUzqQIOi1Mg1M.jpg";

// const MovieCard = ({ id, poster_path, title, genre_ids, getGenres }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [trailerUrl, setTrailerUrl] = useState("");
//   const handleisFavorite = () => {
//     setFavorite((favorite) => !favorite);
//   };

//   const [favorite, setFavorite] = useState(false);

//   // Fetch the trailer video when hovering starts
//   const fetchTrailer = async () => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${id}/videos?api_key=bcc26b7e142a51f09bcf0a149964e33b`
//       );
//       const data = await response.json();
//       // Look for a trailer from YouTube (could also check for type "Teaser" if desired)
//       const trailer = data.results.find(
//         (video) => video.type === "Trailer" && video.site === "YouTube"
//       );
//       if (trailer) {
//         setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1`);
//       }
//     } catch (error) {
//       console.error("Error fetching trailer:", error);
//     }
//   };

//   return (
//     <motion.div
//       className="w-[208px] h-[296px] movie-card relative rounded-2xl rounded-tl-none overflow-hidden flex flex-col justify-end before:content-[''] before:absolute before:z-50 before:top-0 before:left-[34%] before:bg-transparent before:rounded-[50%] before:w-4 before:h-4 before:shadow-[-10px_-5px_0_#030A1B] after:content-[''] after:absolute after:top-[23%] after:bg-transparent after:w-4 after:h-4 after:rounded-[50%] after:shadow-[-10px_-5px_0_#030A1B] shadow-[0px_14px_42px_-8px_#7090B033]"


//       // When hover starts, set isHovered and fetch the trailer.
//       onHoverStart={() => {
//         setIsHovered(true);
//         fetchTrailer();
//       }}
//       // When hover ends, reset the hover state and clear the trailer URL.
//       onHoverEnd={() => {
//         setIsHovered(false);
//         setTrailerUrl("");
//       }}
//     >
//       {/* If hovered and a trailer URL is available, display the trailer in an iframe */}
//       {isHovered && trailerUrl ? (
//         <iframe
//           src={trailerUrl}
//           className="absolute w-full h-full"
//           frameBorder="0"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//         />
//       ) : (
//         // Otherwise, show the movie poster
//         <motion.img
//         initial={{ scale: 1 }}
//         whileHover={{ scale: 1.3 }}  // Zoom in effect on hover
//         transition={{ duration: 0.3 }}
//           src={`https://image.tmdb.org/t/p/w500${poster_path}`}
//           alt={title}
//           className="absolute w-full h-full object-cover transition-transform duration-300 ease-in-out"
//         />
       

        
//       )}

//       {/* If hovered but no trailer is available yet, show a play button overlay */}
//       {isHovered && !trailerUrl && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.3, ease: "easeOut" }}
//           className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
//         >
//           <PlayCircle size={50} className="text-white" />
//         </motion.div>
//       )}

// <button
//         onClick={handleisFavorite}
//         className="cursor-pointer w-16 h-16 outline-8 outline-[#030A1B] rounded-2xl absolute -top-0.25 -left-0.25 flex justify-center items-center backdrop-blur-[1px] hover:bg-[#00000091]">
//         <span
//           className={`${
//             favorite ? "hidden" : "inline"} absolute w-1 h-6 bg-white rounded-2xl`}>
//  </span>
//         <span className="w-6 h-1 bg-white rounded-2xl">
          
//         </span>
//       </button>

//       {/* Movie Information (Title and Genres) */}



//       <div className='w-full bg-gradient-to-t from-[#000000] to-[#00000010] ..." z-30 px-3 pb-3 pt-12 capitalize cursor-context-menu opacity-100'>
//         <h3 className="text-2xl font-medium overflow-hidden overflow-ellipsis">{title}</h3>
//         <div className="font-extralight overflow-hidden overflow-ellipsis flex flex-wrap">
//           {genre_ids.map((genreId, index) => {
//             const genre = getGenres.find((g) => g.id === genreId);
//             return genre ? (
//               <span key={genre.id} className="mr-1">
//                 {index > 0 && "/"} {genre.name}
//               </span>
//             ) : null;
//           })}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default MovieCard;
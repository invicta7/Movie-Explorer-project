import React, { useState } from "react";
import myImage from "../assets/images/i47IUSsN126K11JUzqQIOi1Mg1M.jpg";
import Genre from "./button/Genre";
import { motion } from "framer-motion";

const MovieCard = ({ poster_path, title, genre_ids, getGenres }) => {
  const [favorite, setFavorite] = useState(false);

  const handleisFavorite = () => {
    setFavorite((favorite) => !favorite);
  };

  return (
    <div
      className={`w-[208px] h-[296px] movie-card relative rounded-2xl rounded-tl-none overflow-hidden flex flex-col justify-end before:content-[''] before:absolute before:z-50 before:top-0 before:left-[34%] before:bg-transparent before:rounded-[50%] before:w-4 before:h-4 before:shadow-[-10px_-5px_0_#030A1B] after:content-[''] after:absolute after:top-[23%] after:bg-transparent after:w-4 after:h-4 after:rounded-[50%] after:shadow-[-10px_-5px_0_#030A1B] shadow-[0px_14px_42px_-8px_#7090B033]`}
    >
      {/* <img src={myImage} alt="movie-poster" className='absolute'/> */}
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="image"
        className="absolute"
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

      <div className='w-full bg-gradient-to-t from-[#000000] to-[#00000010] ..." z-30 px-3 pb-3 pt-12 capitalize cursor-context-menu opacity-100'>
        <h3 className="text-2xl font-medium overflow-hidden overflow-ellipsis">
          {title}
        </h3>
        <div className="font-extralight overflow-hidden overflow-ellipsis flex flex-nowrap">
        {genre_ids.map((id, index) => {  //mapping corrected by chatGPT to include a return function
                            const relevantGenre = getGenres.find(genre => genre.id === id);
                            return relevantGenre ? index < 2? index === 1 ? <p key={relevantGenre.id}>/{relevantGenre.name}</p> : <p key={relevantGenre.id}>{relevantGenre.name}</p> : null: null;  // the whole elevantGenre ? index < 2? index === 1 ? ish was mainly to add a slash in between genres, giving it a semblance to the figma design. ChatGPT didn't give me that idea I promise; ChatGPTs method infact was slightly longer....
                        })}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

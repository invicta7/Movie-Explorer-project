import React from "react";
import WatchMovie from "../components/button/WatchMovie";
import Genre from "../components/button/Genre";
import MoreInfo from "../components/button/MoreInfo";
import FooterLinks from "../components/navLinks/FooterLinks";
import SeeMore from "../components/navLinks/SeeMore";
import DropDownBar from "../components/DropDownBar";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import HeroSearchBar from "../components/HeroSearchBar";
import NavBar from "../components/NavBar";

const Home = () => {
  return <main>
    <NavBar/>
    <WatchMovie 
      buttonName = {"watch movie"}
    />
    <Genre
      genre={'animation'}
    />
    <MoreInfo
      buttonName = {"more info"}
    />
    <FooterLinks
    linkName={'Sample name'}
    />
    <SeeMore/>
    <DropDownBar
    placeholderText={'Release year'}
    categoryName={'release-year'}
    inputName={'year'}
    />
    <SearchBar/>
    <MovieCard/>
     
  </main>;
};
export default Home;

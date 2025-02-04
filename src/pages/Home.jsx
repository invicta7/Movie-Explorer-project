import React from "react";
import WatchMovie from "../components/button/WatchMovie";
import Genre from "../components/button/Genre";
import MoreInfo from "../components/button/MoreInfo";
import FooterLinks from "../components/navLinks/FooterLinks";
import SeeMore from "../components/navLinks/SeeMore";
import DropDownBar from "../components/DropDownBar";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import MovieList from "../components/MovieList";

const Home = () => {
  return <main>
    <NavBar/>
    <Header/>
    <MovieList/>
    <Genre/>
    
     
  </main>;
};
export default Home;

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
import Footer from "../components/Footer";
import MovieDetails from "./MovieDetails";
import FavoriteList from "../components/FavoriteList";

const Home = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <FavoriteList />
      <MovieList />
      <Footer />
    </main>
  );
};
export default Home;

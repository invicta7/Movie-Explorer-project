import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesMovie from "./pages/FavoritesMovie";
import SearchMovie  from "./pages/SearchMovie";
import  Home  from "./pages/Home";
import  MovieDetails  from "./pages/MovieDetails";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesMovie />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<SearchMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

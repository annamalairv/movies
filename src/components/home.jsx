import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer";
import MovieCard from "./card"
import { LoginSection } from "./Login";
import { useNavigate } from "react-router-dom";


// Apikey: 1e448e0dfcdbb565f5d329820065b4d2
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1e448e0dfcdbb565f5d329820065b4d2";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";

export const Home = ()=> {
  let arr = [1, 2, 3, 4, 5]
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })

  }, [])
  useEffect(() => {
    if (query != "") {
      console.log(query, "query>>");
      searchMovie();
    }
    else {
      allMovie()
    }
  }, [query])

  const searchMovie = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&query=${query}`;
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        console.log(data, "json123");
        setMovies(data.results);
      })
  }

  const allMovie = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        // console.log(data, "json123");
        setMovies(data.results);
      })
  }

  const closeModal = () => {
    setOpen(false);
  }

  function routeTo(id) {navigate(`/${id}`);}

  return (
    <div className="h-full bg-[#edf5f7]">
      <Navbar setQuery={setQuery} setopen={setOpen} />

      {/* Popular Movie Section */}
      <div className="p-10">
        <div className="font-bold text-2xl py-4">Popular Movies</div>
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3  lg:grid-cols-5 xl:grid-cols-6 ">
          {movies.map((movie) => <MovieCard key={movie.id} {...{movie}} onMovieSelect={()=> routeTo(movie.id)} /> )}
        </div>
      </div>


      <div style={{ position: "relative" }}><Footer /></div>

      <LoginSection {...{ closeModal, open }} />
    </div>
  );
};
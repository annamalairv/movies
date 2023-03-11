import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer";
import MovieCard from "./card"
import { LoginSection } from "./Login";
import { useNavigate } from "react-router-dom";


// Apikey: 1e448e0dfcdbb565f5d329820065b4d2
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1e448e0dfcdbb565f5d329820065b4d2";
const languageGetUrl = "https://api.themoviedb.org/3/configuration/languages?api_key=1e448e0dfcdbb565f5d329820065b4d2";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";

export const Home = () => {
  let arr = [1, 2, 3, 4, 5]
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [languageList, setLanguageList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(languageGetUrl)
      .then((res) => res.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length)
          setLanguageList(data.filter(e => e.name));
      })
  }, []);

  useEffect(() => {
    fetch(`${API_URL}&with_original_language=${language}`)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results);
      })
  }, [language]);

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

  function routeTo(id) { navigate(`/${id}`); }

  return (
    <div className="h-full bg-[#edf5f7]">
      <Navbar setopen={setOpen} selectLang={(e) => setLanguage(e.target.value)} {...{ setQuery, languageList }} />

      {/* Popular Movie Section */}
      <div className="">
        <div className="font-bold text-2xl  mx-10 mt-10">My Movies</div>
        <div className="grid gap-8 container z-999  grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3 ">
          {movies.map((movie) => {
            return movie.backdrop_path ? <MovieCard key={movie.id} {...{ movie }} onMovieSelect={() => routeTo(movie.id)} /> : null
          })}
        </div>
      </div>


      <div style={{ position: "relative" }}><Footer /></div>

      <LoginSection {...{ closeModal, open }} />
    </div>
  );
};
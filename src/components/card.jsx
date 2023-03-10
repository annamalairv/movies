import React from "react";
const API_IMG="https://image.tmdb.org/t/p/w500/";

 const MovieCard=({title, poster_path, vote_average, release_date, overview})=> {
 
    return (
        <div className="w-full m-10 rounded-lg shadow-md lg:max-w-sm bg-[#212529]">
        <img
            className="object-cover w-full h-48"
            src={API_IMG+poster_path}
            alt="image"
        />
        <div className="p-4 ">
            <h4 className="text-xl font-semibold tracking-tight text-[#ffffff]">
                {title}
            </h4>
            <p className="mb-2 leading-normal text-[#948A99]">
               {overview}
            </p>
            <button className="px-4 py-2 text-sm text-blue-100 bg-[#9352B3]  rounded shadow">
                Read more
            </button>
        </div>
    </div>
    );
  }
  export default MovieCard;
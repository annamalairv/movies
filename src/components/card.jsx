import {React,useContext} from "react";
import {API_IMG_W500} from "../constants/imageUrls";
import { GlobalContext } from "./context/GlobalState";

const MovieCard = ({ movie ,onMovieSelect}) => {
    // console.log(movie,"movie>>>");
    const {MoviesDispatch , watched} = useContext(GlobalContext)

  
    const storedMovieWatched = watched.find((o)=> o.id === movie.id)
    const alreadywatched = storedMovieWatched ? true : false      


    return (
     


        /////
        <div className="w-full m-10 rounded-lg  group shadow-md lg:max-w-sm bg-white " >
          
          <div className="relative  overflow-hidden">
          <img
            className="rounded-lg w-auto "
          
            src={API_IMG_W500 + movie.backdrop_path}
            alt="image"
        />
      <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button onClick={()=>MoviesDispatch({type : 'ADD_MOVIE_TO_WATCHED' , payload : movie })} className="bg-black text-white py-2 px-5">{alreadywatched?"Already watched":"watch Now"}</button>
      </div>
    </div>

       
        <div className="p-4 ">
            <h4 className="text-xl font-semibold tracking-tight text-black">
            {movie.title}
            </h4>
            <p className="mb-2 leading-normal text-[#948A99]">
            {movie.overview}
            </p>
            <button onClick={onMovieSelect} className="px-4 py-2 text-sm text-blue-100 bg-[#3e4555]  rounded shadow">
                More Details
            </button>
        </div>
        
    </div>
    );
}
export default MovieCard;
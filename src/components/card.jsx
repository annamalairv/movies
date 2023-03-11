import {React,useContext} from "react";
import {API_IMG_W500} from "../constants/imageUrls";
import { GlobalContext } from "./context/GlobalState";

const MovieCard = ({ movie ,onMovieSelect}) => {
    console.log(movie,"movie>>>");
    const {MoviesDispatch , watched} = useContext(GlobalContext)

  
    const storedMovieWatched = watched.find((o)=> o.id === movie.id)
    const alreadywatched = storedMovieWatched ? true : false      


    return (
        // <div className="rounded-2xl card flex-1 shadow text-white cursor-pointer" onClick={onMovieSelect}>
        //     <div className="relative">
        //         <div className="viewMore bg-black/20 hover:bg-black/50 px-4 rounded-full">More info</div>
        //         <img
        //             className="rounded-2xl w-auto"
        //             src={API_IMG_W500 + movie.poster_path}
        //             alt="image"
        //         />
        //     </div>

        //     <div className="whenhovered relative rounded-2xl ">
        //         <div className="backdrop-blur-sm bg-black/30 rounded-xl ">
        //             <h4 className="px-4 pt-4 pb-1 text-2xl font-bold">
        //                 {movie.title}
        //             </h4>
        //             <p className="text-sm  px-4 py-1 leading-6 truncateText">
        //                 {movie.overview}
        //             </p>
        //         </div>
        //     </div>
        // </div>


        /////
        <div className="w-full m-10 rounded-lg group shadow-md lg:max-w-sm bg-white " >
          
          <div class="relative overflow-hidden">
          <img
            className="object-cover w-full h-48"
            src={API_IMG_W500 + movie.poster_path}
            alt="image"
        />
      <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button onClick={()=>MoviesDispatch({type : 'ADD_MOVIE_TO_WATCHED' , payload : movie })} class="bg-black text-white py-2 px-5">{alreadywatched?"watched":"watch Now"}</button>
      </div>
    </div>

       
        <div className="p-4 ">
            <h4 className="text-xl font-semibold tracking-tight text-black">
            {movie.title}
            </h4>
            <p className="mb-2 leading-normal text-[#948A99]">
            {movie.overview}
            </p>
            <button onClick={onMovieSelect} className="px-4 py-2 text-sm text-blue-100 bg-[#9352B3]  rounded shadow">
                More Details
            </button>
        </div>
        
    </div>
    );
}
export default MovieCard;
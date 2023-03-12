import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { API_IMG } from "../constants/imageUrls";
import { GlobalContext } from "./context/GlobalState";
import Footer from "./footer";
// import { GlobalContext } from "./context/GlobalState";


export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [cast,setCast]=useState([]);
  const[trailer,setTrailer]=useState([]);
  const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=1e448e0dfcdbb565f5d329820065b4d2`;
  const STATUS_API=`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US`;
  const TRAILTER_API=`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US`
  


  useEffect(() => {
    if (movieId)
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => {
            setMovieDetail(data);
          }, 1000);
        });
castApi();
trailerApi();
  }, [movieId]);
  


  const castApi=()=>{
    fetch(STATUS_API)
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        setCast(data.cast);
      }, 1000);
    });
  }
  const trailerApi=()=>{
    fetch(TRAILTER_API)
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        setTrailer(data.results);
      }, 1000);
    });

  }

  const {MoviesDispatch , watched} = useContext(GlobalContext)

  
  const storedMovieWatched = watched.find((o)=> o.id === movieDetail.id)
  const alreadywatched = storedMovieWatched ? true : false     
console.log(cast,"cast");

  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="top-0 left-0 w-full h-screen object-cover"
          src={API_IMG + movieDetail.backdrop_path}
          alt="/"
        />
        <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
              {movieDetail.title}
            </h1>
            <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
              {movieDetail.overview}
            </p>
            <button onClick={()=>MoviesDispatch({type : 'ADD_MOVIE_TO_WATCHED' , payload : movie })} className="bg-red-600 text-white p-2 ">{alreadywatched?"Already watched":"watch Now"}</button>
          </div>
        </div>
      </div>
      {/* ////cast */}

      <h1 className="text-xl px-3 py-2">Cast</h1>
      <div className="scrollbar w-full scrollbar-thumb-primary scrollbar-hide  scrollbar-track-header">
        <div className="flex items-center   gap-3 overflow-y-hidden overflow-y-scroll">
          {cast.map((cast, i) => {
            console.log(cast,"cast>>>");
           return(
            <div className="flex-shrink-0   w-[200px] mb-6" key={i}>
            <div className="group mx-3 my-1.5 cursor-pointer bg-black">
              <div
                className="
      h-[200px]
      relative
      rounded-lg overflow-hidden
  "
              >
                    <img
                    className="rounded-lg w-auto"
                    src={API_IMG + cast.profile_path}
                    alt="image"
                />
              </div>
              <p className="py-1.5 pl-3 text-white line-clamp-2">
                {cast.name}
              </p>
            </div>
          </div>




           )
          })}
        </div>
      </div>

      {/* //// */}

      <h1 className="text-xl px-3 py-2">Trailer</h1>
     
      <div className="scrollbar w-full scrollbar-thumb-primary scrollbar-hide  scrollbar-track-header">
        <div className="flex items-center   gap-3   overflow-y-scroll">
          {trailer.map((trailer, i) => (
            <div className="flex-shrink-0   w-[400px] mb-6" key={i}>
              <div className="group mx-3 my-1.5 cursor-pointer bg-white">
                <div
                  className="
        h-[200px]
        relative
        rounded-lg overflow-hidden
    "
                >
                         <img
                    className="rounded-lg w-auto"
                    src={`https://img.youtube.com/vi/${trailer.key}/mqdefault.jpg`}
                    alt="image"
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Footer />
      </div>
    </div>
  );
};

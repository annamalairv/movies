import React from "react";
import {API_IMG_W500} from "../constants/imageUrls"

const MovieCard = ({ movie ,onMovieSelect}) => {

    return (
        <div className="rounded-2xl card flex-1 shadow text-white cursor-pointer" onClick={onMovieSelect}>
            <div className="relative">
                <div className="viewMore bg-black/20 hover:bg-black/50 px-4 rounded-full">More info</div>
                <img
                    className="rounded-2xl w-auto"
                    src={API_IMG_W500 + movie.poster_path}
                    alt="image"
                />
            </div>

            <div className="whenhovered relative rounded-2xl ">
                <div className="backdrop-blur-sm bg-black/30 rounded-xl ">
                    <h4 className="px-4 pt-4 pb-1 text-2xl font-bold">
                        {movie.title}
                    </h4>
                    <p className="text-sm  px-4 py-1 leading-6 truncateText">
                        {movie.overview}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default MovieCard;
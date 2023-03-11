import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_IMG } from "../constants/imageUrls"


export const MovieDetail = () => {
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState({});
    const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=1e448e0dfcdbb565f5d329820065b4d2`;

    useEffect(() => {
        if (movieId)
            fetch(API_URL)
                .then((res) => res.json())
                .then(data => {
                    setTimeout(() => {
                        setMovieDetail(data);
                    }, 1000);
                })

    }, [movieId])

    return <div className="h-screen flex flex-col">
        {movieDetail.id ? <div className="w-full">
            <div className="w-full relative">
                <img
                    className="object-fill w-full backdrop-blur-sm bg-black/30"
                    src={API_IMG + movieDetail.backdrop_path}
                    alt="image"
                />
                <div className="absolute bottom-5 backdrop-blur-sm bg-black/30 text-white px-2 text-xl md:text-3xl">{movieDetail.original_title}</div>
            </div>
        </div> : <div className="text-xl">Loading Details...</div>}
    </div>
}
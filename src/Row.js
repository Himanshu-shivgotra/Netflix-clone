import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "./Row.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const img_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [clickedMovie, setClickedMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: "500vh",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (clickedMovie !== movie) {
            setClickedMovie(movie);
            setTrailerUrl("");
            movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title || "")
                .then((url) => {
                    try {
                        const UrlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(UrlParams.get("v"));
                    } catch (error) {
                        console.log("failed ", error)
                    }
                })
                .catch((error) => console.log(error))
        }
        else {
            setClickedMovie(null);
            setTrailerUrl("");
        }
    };

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img onClick={() => handleClick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"} ${clickedMovie === movie ? "row__posterActive" : ""}`} key={movie.id} src={`${img_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row

import React, {useContext, useEffect} from "react"

import MovieCard from "./MovieCard"
import {Context} from "../Context"
// import {Link} from "react-router-dom"

function Watchlist() {
    const {watchlist} = useContext(Context)

    function renderMovieCards() {
        if (Array.isArray(watchlist)) {
            return watchlist.map(movie => {

                return (
                    <MovieCard 
                        // key={movie.id}
                        // title={movie.original_title} 
                        // poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        // year={movie.release_date.substr(0, 4)}
                        // plot={movie.overview}
                        // rating={movie.vote_average}
                        // runtime={movie.runtime}

                        key={movie.id}
                        movie={movie}
                    />
                )
            })
        }
    }

    useEffect(() => {
        renderMovieCards()
    }, [watchlist])

    return (
        <div>
            <div className="container">
                {renderMovieCards()}
            </div>
        </div>
    )
}

export default Watchlist
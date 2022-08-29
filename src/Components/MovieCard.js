import React, { useContext, useState } from "react"
import {Context} from "../Context"



function MovieCard(props) {
    const {addToWatchlist, removeFromWatchlist, watchlist, checkIfMovieIsInWatchlist} = useContext(Context)

    return (
        <div className="card-container">
            <div className="card-poster-container">
                <img className="card-poster-img" src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt=""/>
            </div>
            <div className="card-body-container">
                <div className="card-header">
                    <h3>{props.movie.title}</h3>
                    <span>{props.movie.release_date.substr(0, 4)}</span>
                </div>
                <div className="card-info">
                    <span>{props.movie.vote_average}</span>
                    <span>{props.movie.runtime}</span>
                </div>
                <div className="card-description">
                    <span>{props.movie.overview}</span>
                </div>

                {checkIfMovieIsInWatchlist(props.movie.id) ? 
                <button className="remove-btn" /*id={`remove-btn-${props.movie.id}`}</div>*/ onClick={() => removeFromWatchlist(props.movie.id)}>Remove</button> : 
                <button className="add-btn" /*id={`add-btn-${props.movie.id}`}*/ onClick={() => addToWatchlist(props.movie)}>Save</button>}
            </div>
        </div>
    )
}

export default MovieCard
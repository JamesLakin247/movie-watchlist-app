import React from "react"

function MovieCard(props) {
    return (
        <div>
            <div className="poster-side">
                <img src={props.poster} alt=""/>
            </div>
            <div className="info-side">
                <div className="card-header">
                    <h3>{props.title}</h3>
                    <span>{props.year}</span>
                </div>
                <div className="card-info">
                    <span>{props.rating}</span>
                    <span>{props.genre}</span>
                    <span>{props.runtime}</span>
                </div>
                <div className="card-description">
                    <span>{props.plot}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
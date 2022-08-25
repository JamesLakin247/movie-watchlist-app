import React from "react"



function MovieCard(props) {
    return (
        <div className="card-container">
            <div className="card-poster-container">
                <img className="card-poster-img" src={props.poster} alt=""/>
            </div>
            <div className="card-body-container">
                <div className="card-header">
                    <h3>{props.title}</h3>
                    <span>{props.year}</span>
                </div>
                <div className="card-info">
                    <span>{props.rating}</span>
                    {/* <span>{props.genre}</span> */}
                    <span>{props.runtime}</span>
                </div>
                <div className="card-description">
                    <span>{props.plot}</span>
                </div>
                <button onClick={props.inWatchlist}>Save</button>
            </div>
        </div>
    )
}

export default MovieCard
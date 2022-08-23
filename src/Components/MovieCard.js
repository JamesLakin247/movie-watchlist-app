import React from "react"

function MovieCard(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.year}</p>
            <img src={props.poster} alt=""/>
        </div>
    )
}

export default MovieCard
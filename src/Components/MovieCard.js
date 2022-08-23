import React from "react"

function MovieCard(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.poster} alt=""/>
        </div>
    )
}

export default MovieCard
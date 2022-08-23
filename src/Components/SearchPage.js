import React, {useState, useEffect} from "react"

import MovieCard from "./MovieCard"

function SearchPage() {
    const [searchInput, setSearchInput] = useState("")
    const [movieResults, setMovieResults] = useState([])
    
    function search(e) {
        setSearchInput(e.target.value)
        
        e.preventDefault() //not working
    }

    function renderMovieCards() {
        return movieResults?.map(movie => {
            return (
                <MovieCard 
                    key={movie.imdbID} 
                    title={movie.Title} 
                    poster={movie.Poster}
                    year={movie.Year}
                    // rating={movie.Rating}
                />
            )
        })
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${searchInput}&apikey=cc190004`)
            .then(res => res.json())
            .then(data => {
                const movies = data.Search
                const moviesArray = movies?.map(movie => {
                    return movie
                    // return <div key={movie.imdbID}>{movie}</div>
                })
                setMovieResults(moviesArray)
            })
    }, [searchInput])

    console.log(movieResults)
    return (
        <div>
            <div className="container">
                <input type="text" placeholder="Find your movie" onChange={e => search(e)}/>
                <button onClick={e => search(e)}>Search</button>
                <h1>{searchInput}</h1>
                <div>
                    {renderMovieCards()}
                </div>
            </div>
        </div>
    )
}

export default SearchPage
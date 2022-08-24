import React, {useState, useEffect} from "react"

import MovieCard from "./MovieCard"

function SearchPage() {
    const [searchInput, setSearchInput] = useState("")
    const [movieResults, setMovieResults] = useState([])
    const [movieIds, setMovieIds] = useState([])
    
    function search(e) {
        setSearchInput(e.target.value)
        
        e.preventDefault() //not working
    }

    function renderMovieCards() {
        return movieResults.map(movie => {
            return (
                <MovieCard 
                    key={movie.imdbID} 
                    title={movie.Title} 
                    poster={movie.Poster}
                    year={movie.Year}
                    plot={movie.Plot}
                    // rating={movie.Rating}
                />
            )
        })
    }

    function findSearch() {
        fetch(`https://www.omdbapi.com/?s=${searchInput}&apikey=cc190004`)
            .then(res => res.json())
            .then(data => {
                const movies = data.Search
                const moviesArray = movies?.map(movie => {
                    return movie.imdbID
                })
                setMovieIds(moviesArray)
            })
    }

    async function findImdbData(imdbIds) {
        if (Array.isArray(imdbIds)) {
            const newArr = await Promise.all(
                imdbIds.map(async (id) => {
                    const response = await fetch(`https://omdbapi.com/?i=${id}&apikey=cc190004`)
                    return await response.json()
                })
            )
            setMovieResults(newArr)
        }
    }

    useEffect(() => {
        findSearch()
        findImdbData(movieIds)
    }, [searchInput])

    console.log(movieIds)
    console.log(movieResults)
    
    return (
        <div>
            <div className="container">
                <input type="text" placeholder="Find your movie" onChange={e => search(e)}/>
                <button onClick={() => findImdbData(movieIds)}>Search</button>
                <h1>{searchInput}</h1>
                <div>
                    {renderMovieCards()}
                </div>
            </div>
        </div>
    )
}

export default SearchPage
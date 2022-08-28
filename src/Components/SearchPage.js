import React, {useState, useEffect} from "react"

import MovieCard from "./MovieCard"

function SearchPage() {
    const [searchInput, setSearchInput] = useState("")
    const [movieResults, setMovieResults] = useState([])
    const [movieIds, setMovieIds] = useState([])
    
    function renderMovieCards() {
        if (Array.isArray(movieResults)) {
            return movieResults.map(movie => {

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

    function search(e) {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    function findSearch() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b4729e68aa0a741155fee062c4bb8df7&language=en-US&page=1&include_adult=false&query=${searchInput}`)
            .then(res => res.json())
            .then(data => {
                const ids = data.results.map(movie => {
                    return movie.id
                })
                setMovieIds(ids)
                console.log(movieIds) 
            })
    }
    
    function findImdbData() {
        const newArr = []
        movieIds.forEach(id => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b4729e68aa0a741155fee062c4bb8df7&language=en-US&page=1&include_adult=false`)
                .then(res => res.json())
                .then(data => {
                    newArr.push(data)
                })
        })
        setMovieResults(newArr)
    }
    console.log(movieResults)
    useEffect(() => {
        findImdbData()
        findSearch()
    }, [searchInput])


    console.log(movieResults)
    
    return (
        <div>
            <div className="container">
                <div className="search-container">
                    <div className="search-wrapper">
                        <input className="search-input" type="text" placeholder="Find your movie" onChange={e => search(e)}/>
                        <button className="search-btn" onClick={findSearch}>Search</button>
                    </div>
                </div>
                <div>
                    {renderMovieCards()}
                </div>
            </div>
        </div>
    )
}

export default SearchPage
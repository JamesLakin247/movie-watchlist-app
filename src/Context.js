import React, {createContext, useEffect, useState} from "react"

const Context = createContext()

function ContextProvider({children}) {
    const [isInWatchlist, setIsInWatchlist] = useState(false)
    const [watchlist, setWatchlist] = useState(localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [])

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist))
    }, [watchlist])
  
    // function toggleWatchlist() {
    //   setIsInWatchlist(prevState => !prevState)
    // }

    function checkIfMovieIsInWatchlist(movieId) {
        return watchlist.includes(movieId)
    }
  
    function addToWatchlist(movie) {
        setWatchlist(prevState => [...prevState, movie])
        console.log(watchlist)
        // document.getElementById(`remove-btn-${movie.id}`).style.display = "block"
        // document.getElementById(`add-btn-${movie.id}`).style.display = "none"
    }

    function removeFromWatchlist(id) {
        // localStorage.removeItem("watchlist")
        const newArr = watchlist.filter(movie => movie.id !== id)
        setWatchlist(newArr)
        // document.getElementById(`remove-btn-${id}`).style.display = "none"
        // document.getElementById(`add-btn-${id}`).style.display = "block"
    }

    // function checkWatchlist() {
    //     console.log(watchlist)
    // }

    return (
        <Context.Provider value={{isInWatchlist, watchlist, addToWatchlist, removeFromWatchlist}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="container">
                <div className="links-wrapper">
                    <Link className="nav-link" to="movie-watchlist-app/watchlist">Your Watchlist</Link>
                    <Link className="nav-link" to="movie-watchlist-app/">Search Page </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
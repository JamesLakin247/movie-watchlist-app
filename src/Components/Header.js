import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/watchlist">Your Watchlist</Link>
                </li>
                <li>
                    <Link to="/">HomePage</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
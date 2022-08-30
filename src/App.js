import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./Components/Header"
import SearchPage from "./Components/SearchPage";
import Watchlist from "./Components/Watchlist"

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/movie-watchlist-app/' element={<SearchPage />} />
        <Route path="/movie-watchlist-app/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
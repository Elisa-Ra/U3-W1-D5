import "./App.css"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
// import Account from "./components/Account"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MySettings from "./components/MySettings"
import MyAccount from "./components/Account"
import TVShows from "./components/TVShows"
import MovieDetails from "./components/MovieDetails"

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<MySettings />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="/movies" element={<Home />} />
          <Route path="/recent" element={<Home />} />
          <Route path="/mylist" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  )
}

export default App

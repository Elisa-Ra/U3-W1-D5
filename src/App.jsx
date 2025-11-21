import "./App.css"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
import Category from "./components/Category"
import MyMovies from "./components/MyMovies"
function App() {
  return (
    <>
      <MyNavbar />
      <main>
        <Category />
        <MyMovies title="Trending Now" movieName="Star Wars" />
        <MyMovies title="Watch It Again" movieName="Alien" />
        <MyMovies title="New Releases" movieName="The lord of the rings" />
      </main>
      <MyFooter />
    </>
  )
}

export default App

import "./App.css"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
import Category from "./components/Category"
import MyMovies from "./components/MyMovies"
import Account from "./components/Account"
import MyButton from "./components/MyButton"

function App() {
  return (
    <>
      <MyNavbar />
      <main>
        <Category />
        <MyMovies title="Trending Now" movieName="Star Wars" />
        <MyMovies title="Watch It Again" movieName="Alien" />
        <MyMovies title="New Releases" movieName="The lord of the rings" />
        <MyButton />
      </main>
      <MyFooter />
    </>
  )
}

export default App

import Category from "./Category"
import MyMovies from "./MyMovies"

function Home() {
  return (
    <>
      <Category />
      <MyMovies title="Trending Now" movieName="Star Wars" />
      <MyMovies title="Watch It Again" movieName="Alien" />
      <MyMovies title="New Releases" movieName="The lord of the rings" />
    </>
  )
}

export default Home

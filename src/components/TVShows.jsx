import { Container, Image } from "react-bootstrap"
function TVShows() {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center my-5"
      >
        <Image src="https://placedog.net/600/300/?id=30" className="w-50" />
        <h1 className="text-danger">La mia serie preferita è LOST!</h1>
      </Container>
    </>
  )
}

export default TVShows

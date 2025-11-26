import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Loading from "./Loading"
import Error from "./Error"

const url = "https://www.omdbapi.com/?apikey=6d470a61&i="

function MovieDetails() {
  const { movieId } = useParams() // recupero l'id dall'URL
  //   Uso gli hooks
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // Prima fetch all'api dei film
        let response = await fetch(url + movieId)
        // Seconda fetch per le recensioni
        let response2 = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTI3MWMyOTUwZTExNzAwMTVkMWM2NzUiLCJpYXQiOjE3NjQxNzA3OTMsImV4cCI6MTc2NTM4MDM5M30.UUX3n_9QxRIPWHGI46fyiegCXCNRDm_ygBNMGYNXgWE",
            },
          }
        )

        // Se la richiesta va a buon fine
        if (response.ok && response2.ok) {
          let data = await response.json()
          let data2 = await response2.json()
          setMovie(data)
          setReviews(data2)
          setIsLoading(false)
        } else {
          throw new Error("Qualcosa è andato storto: " + response.status)
        }
      } catch (error) {
        console.log(error)
        setIsError(true)
        setIsLoading(false)
      }
    }
    fetchMovie()
    // Secondo parametro di useEffect, l'effetto viene rieseguito quando movieId cambia
  }, [movieId])

  return (
    <Container className="my-5 text-white">
      {isLoading && <Loading />}
      {isError && <Error />}
      {movie && (
        <>
          <Row>
            <Col md={4}>
              <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
            </Col>
            <Col md={8}>
              <h3 className="display-3 mb-5 mt-0 text-danger">{movie.Title}</h3>
              <p>
                <strong className="text-danger">Anno:</strong> {movie.Year}
              </p>
              <p>
                <strong className="text-danger">Durata:</strong> {movie.Runtime}
              </p>
              <p>
                <strong className="text-danger">Genere:</strong> {movie.Genre}
              </p>
              <p>
                <strong className="text-danger">Trama:</strong> {movie.Plot}
              </p>
              <p>
                <strong className="text-danger">Regia:</strong> {movie.Director}
              </p>
              <p>
                <strong className="text-danger">Attori:</strong> {movie.Actors}
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h4 className="text-danger">RECENSIONI:</h4>
              {/* Se la lunghezza di reviews è 0 significa che non ci sono recensioni */}
              {reviews.length === 0 && <p>Non ci sono ancora recensioni.</p>}

              {reviews.map((r, i) => (
                <div key={i} className="mb-2">
                  <p>
                    <strong className="text-info">Voto: </strong> {r.rate}
                    <strong className="text-info ms-3">Recensione: </strong>
                    {r.comment}
                  </p>
                </div>
              ))}
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default MovieDetails

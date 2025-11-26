import { Row, Col, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"
// Creo un carousel con due schermate, uso lo slice per mostrare i primi 6 film nella prima schermata e gli altri sei nella successiva
function MyCarousel({ movies }) {
  return (
    <Carousel>
      <Carousel.Item>
        <Row className="justify-content-center">
          {movies.slice(0, 6).map((movie) => (
            <Col xs={6} sm={4} md={3} lg={2} key={movie.imdbID}>
              <div className="div-img">
                {/* Rendo cliccabile l'immagine e rimando alla pagina MovieDetails */}
                <Link to={`/movie-details/${movie.imdbID}`}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="img-fluid object-fit-cover"
                  />
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Carousel.Item>

      <Carousel.Item>
        <Row className="justify-content-center">
          {movies.slice(6, 12).map((movie) => (
            <Col xs={6} sm={4} md={3} lg={2} key={movie.imdbID}>
              <div className="div-img">
                {/* Rendo cliccabile l'immagine e rimando alla pagina MovieDetails */}
                <Link to={`/movie-details/${movie.imdbID}`}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="img-fluid object-fit-cover"
                  />
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel

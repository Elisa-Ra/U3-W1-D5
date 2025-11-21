import { Row, Col, Carousel } from "react-bootstrap"

function MyCarousel({ movies }) {
  return (
    <Carousel>
      <Carousel.Item>
        <Row className="justify-content-center">
          {movies.slice(0, 6).map((movie) => (
            <Col xs={6} sm={4} md={3} lg={2} key={movie.imdbID}>
              <div className="div-img">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid object-fit-cover"
                />
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
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid object-fit-cover"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel

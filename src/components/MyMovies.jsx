// //  ESEMPIO {
//       "Title": "Star Wars: Episode IV - A New Hope",
//       "Year": "1977",
//       "imdbID": "tt0076759",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
//     }

import { Component } from "react"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import Loading from "./Loading"
import MyCarousel from "./Carousel"

const url = "https://www.omdbapi.com/?apikey=6d470a61&s="

class MyMovies extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount = async () => {
    try {
      // faccio la fetch sull'url base + il titolo che gli passo come props + la tipologia movie
      let response = await fetch(url + this.props.movieName + "&type=movie")
      if (response.ok) {
        let data = await response.json()
        this.setState({
          movies: data.Search || [], // estraggo l’array dei film
          isLoading: false,
          isError: false,
        })
      } else {
        throw new Error("la chiamata non è ok: " + response.status)
      }
    } catch (error) {
      console.log(error)
      this.setState({
        isLoading: false,
        isError: true,
      })
    }
  }

  render() {
    return (
      //   <Container fluid className="mt-4 text-center">
      //     <h4 className="text-white mb-3">{this.props.title}</h4>
      //     {this.state.isLoading && <Loading />}
      //     {this.state.isError && <Error />}
      //     <Row xs={1} sm={2} lg={4} xl={6} className="mb-4">
      //       {this.state.movies.map((movie, index) => (
      //         <Col key={movie.imdbID || index} className="mb-2 text-center px-1">
      //           <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
      //         </Col>
      //       ))}
      //     </Row>
      //   </Container>
      <Container fluid className="mt-4 mb-5">
        <h4 className="text-white mb-3">{this.props.title}</h4>
        {this.state.isLoading && <Loading />}
        {this.state.isError && (
          <div className="text-danger">Errore nel caricamento</div>
        )}

        {!this.state.isLoading && !this.state.isError && (
          <MyCarousel movies={this.state.movies} />
        )}
      </Container>
    )
  }
}

export default MyMovies

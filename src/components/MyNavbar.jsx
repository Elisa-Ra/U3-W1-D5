import { Container, Nav, Navbar } from "react-bootstrap"
import logo from "../assets/logo.png"

function MyNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#221f1f" }}
        className="w-100"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={logo}
              style={{ width: "100px", height: "55px" }}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="fw-bold active">
                Home
              </Nav.Link>
              <Nav.Link href="#tvshows" className="fw-bold">
                Tv Shows
              </Nav.Link>
              <Nav.Link href="#movies" className="fw-bold">
                Movies
              </Nav.Link>
              <Nav.Link href="#recent" className="fw-bold">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#mylist" className="fw-bold">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons"></i>
              <div id="kids" className="fw-bold">
                KIDS
              </div>
              <i className="bi bi-bell icons ms-3"></i>
              <i className="bi bi-person-circle icons ms-3"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar

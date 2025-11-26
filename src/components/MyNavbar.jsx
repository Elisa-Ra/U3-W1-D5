import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

function MyNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
      className="w-100"
    >
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            style={{ width: "100px", height: "55px" }}
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) =>
                isActive ? "fw-bold active" : "fw-bold"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/tvshows"
              className={({ isActive }) =>
                isActive ? "fw-bold active" : "fw-bold"
              }
            >
              Tv Shows
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/movies"
              className={({ isActive }) =>
                isActive ? "fw-bold active" : "fw-bold"
              }
            >
              Movies
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/recent"
              className={({ isActive }) =>
                isActive ? "fw-bold active" : "fw-bold"
              }
            >
              Recently Added
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/mylist"
              className={({ isActive }) =>
                isActive ? "fw-bold active" : "fw-bold"
              }
            >
              My List
            </Nav.Link>
          </Nav>

          {/* Icone a destra */}
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
  )
}

export default MyNavbar

import Container from "react-bootstrap/Container"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Dropdown from "react-bootstrap/Dropdown"

function Category() {
  return (
    <Container
      fluid
      className="d-flex justify-content-between align-items-center  "
    >
      <div className="d-flex align-items-center">
        <h2 className="mb-0 me-3 text-white">Tv Shows</h2>
        <ButtonGroup>
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              size="sm"
              className="rounded-0"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </div>

      <div>
        <i className="bi bi-grid icons"></i>
        <i className="bi bi-grid-3x3 icons ms-2"></i>
      </div>
    </Container>
  )
}

export default Category

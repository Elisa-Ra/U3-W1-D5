import {
  Container,
  Col,
  Row,
  Button,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap"

function MyAccount() {
  return (
    <>
      <Container fluid className="w-50">
        <h1 className="display-1 text-white text-start">Edit Profile</h1>
        <hr className="w-100 text-white" />
        <div className="d-flex align-items-center gap-4">
          <div className="align-self-start">
            <img
              src="https://placecats.com/130/130"
              className="rounded border-1 "
              alt="Avatar"
            />
          </div>
          <div className="flex-grow-1 align-self-start">
            <Row className="w-100 px-4">
              <div className="col-12">
                <Button
                  variant="secondary"
                  className=" rounded-0  w-100 text-start mb-4 mt-2"
                >
                  Strive Student
                </Button>
              </div>
              <Col className="text-start">
                <p className="text-white mb-1">Language:</p>

                <DropdownButton
                  variant="outline-light"
                  id="dropdown-basic-button"
                  title="Dropdown button"
                >
                  <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Italian</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
                </DropdownButton>
              </Col>
              <hr className="mt-4 text-white" />
            </Row>

            {/* <!-- ROW 2 --> */}
            <Row className=" w-100 px-4">
              <Col className="col-12 text-start">
                <p className="text-white mb-1">Maturity Settings:</p>
                <Button variant="secondary" className=" rounded-0 mb-4 mt-2">
                  ALL MATURITY RATINGS
                </Button>
                <p className="text-white">
                  Show titles of <strong>all maturity ratings </strong>for this
                  profile
                </p>
                <Button variant="outline-light" className="rounded-0 px-4 mb-4">
                  EDIT
                </Button>
              </Col>
              <hr className=" text-white" />
            </Row>
            {/* <!-- ROW 3 --> */}
            <Row className=" w-100 px-4">
              <Col className="col-12 px-0">
                <p className="text-white mb-1">Autoplay Controls</p>
                {/* FORM CON LE CHECKBOXS */}
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-3 text-white">
                      <Form.Check
                        type={type}
                        id={`default-${type}1`}
                        label={`Autoplay next episode in a series on all devices.`}
                      />

                      <Form.Check
                        type={type}
                        label={`Autoplay previews while browsing on all devices.`}
                        id={`default-${type}2`}
                      />
                    </div>
                  ))}
                </Form>
              </Col>
            </Row>
          </div>
        </div>
        <hr className="w-100 text-white" />
        <Container>
          <Row className="row-cols-3 gx-0">
            <Col>
              <Button variant="outline-light" className="rounded-0 px-4 mb-4">
                Save
              </Button>
            </Col>
            <Col>
              <Button variant="outline-light" className="rounded-0 px-4 mb-4">
                CANCEL
              </Button>
            </Col>
            <Col>
              <Button variant="outline-light" className="rounded-0 px-4 mb-4">
                DELETE PROFILE
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default MyAccount

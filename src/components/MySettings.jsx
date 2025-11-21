import { Container, Col, Row, Button } from "react-bootstrap"

function MySettings() {
  return (
    <>
      <Container fluid className="bg-white">
        <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
          <h1 className="h1 text-start">Account</h1>
          <hr className="w-100 my-3" />
          {/* <!-- Prima riga --> */}
          <Container className=" px-0">
            <Row>
              <Col xs={4} className="text-start">
                {/* <!-- Colonna sinistra --> */}
                <p className="text-secondary mb-1 text-start">
                  MEMBERSHIP & BILLING
                </p>
                <Button variant="secondary" className=" rounded-0">
                  Cancel Membership
                </Button>
              </Col>
              <Col xs={8}>
                {/* <!-- Colonna destra --> */}
                <Row>
                  <Col xs={6} className="text-start">
                    {/* <!-- Contenuto allineato a sinistra --> */}
                    <p className="fw-bold mb-1">student@strive.school</p>
                    <p className="text-secondary mb-1">Password: *********</p>
                    <p className="text-secondary mb-1">Phone: 321 044 1279</p>
                  </Col>
                  <Col xs={6} className="text-end">
                    {/* <!-- Contenuto allineato a destra --> */}
                    <p className="text-primary mb-1" role="button">
                      Change account email
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Change password
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Change phone number
                    </p>
                  </Col>
                </Row>
                <hr className="w-100 my-2" />
                <Row>
                  <Col xs={6}>
                    {/* <!-- Contenuto allineato a sinistra --> */}
                    <p className="fw-bold mb-1 text-start">
                      <i className="bi bi-paypal"></i> admin@strive.school
                    </p>
                  </Col>
                  <Col xs={6} className="text-end">
                    {/* <!-- Contenuto allineato a destra --> */}
                    <p className="text-primary mb-1" role="button">
                      Update payment info
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Billing details
                    </p>
                  </Col>
                </Row>
                <hr className="w-100 my-2" />
                <Row>
                  <Col xs={6}>
                    {/* <!-- Contenuto allineato a sinistra --> */}
                  </Col>
                  <Col xs={6} className="text-end">
                    {/* <!-- Contenuto allineato a destra --> */}
                    <p className="text-primary mb-1" role="button">
                      Redeem gift card or promo code
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Where to buy gift cards
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <hr className="w-100 my-2" />
          {/* <!-- Seconda riga --> */}
          <Container className=" px-0">
            <Row>
              <Col xs={4}>
                {/* <!-- Colonna sinistra --> */}
                <p className="text-secondary mb-1 text-start">PLAN DETAILS</p>
              </Col>
              <Col xs={8}>
                {/* <!-- Colonna destra --> */}
                <Row>
                  <Col xs={6}>
                    {/* <!-- Contenuto allineato a sinistra --> */}
                    <p className="fw-bold mb-1 text-start">
                      Premium <i className="bi bi-coin"></i>
                    </p>
                  </Col>
                  <Col xs={6} className="text-end">
                    {/* <!-- Contenuto allineato a destra --> */}
                    <p className="text-primary mb-1" role="button">
                      Change plan
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <hr className="w-100 my-2" />
          {/* <!-- Terza riga --> */}
          <Container className=" px-0">
            <Row>
              <Col xs={4}>
                {/* <!-- Colonna sinistra --> */}
                <p className="text-secondary mb-1 text-start">SETTINGS</p>
              </Col>
              <Col xs={8}>
                {/* <!-- Colonna destra --> */}
                <Row>
                  <Col xs={6} className="text-start">
                    {/* <!-- Contenuto allineato a sinistra --> */}
                    <p className="text-primary mb-1" role="button">
                      Parental controls
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Test participation
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Manage download devices
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Activate a device
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Recent device streaming activity
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Sign out of all devices
                    </p>
                  </Col>
                  <Col xs={6} className="text-end">
                    {/* <!-- Contenuto allineato a destra --> */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <hr className="w-100 my-3" />
          {/* <!-- Quarta riga --> */}
          <Container className=" px-0">
            <Row>
              <Col xs={4}>
                {/* <!-- Colonna sinistra --> */}
                <p className="text-secondary mb-1 text-start">PROFILE</p>
              </Col>
              <Col xs={8}>
                {/* <!-- Colonna destra --> */}
                <Row>
                  <Col xs={6}>
                    {/* <!-- Contenuto allineato a sinistra --> */}
                    <div className="d-flex align-items-center gap-2">
                      <img src="https://placecats.com/30/30" alt="avatar" />
                      <p className="fw-bold mb-1">Strive Student</p>
                    </div>
                  </Col>
                  <Col xs={6} className="text-end">
                    {/* <!-- Contenuto allineato a destra --> */}
                    <p className="text-primary mb-1" role="button">
                      Manage profiles
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Add profile email
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} className="text-start">
                    {/* <!-- Contenuto allineato a sinistra --> */}
                    <p className="text-primary mb-1" role="button">
                      Language
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Playback settings
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Subtitle appearance
                    </p>
                  </Col>
                  <Col xs={4} className="text-end">
                    {/* <!-- Contenuto allineato a destra --> */}
                    <p className="text-primary mb-1" role="button">
                      Viewing Activity
                    </p>
                    <p className="text-primary mb-1" role="button">
                      Ratings
                    </p>
                  </Col>
                  <Col xs={4} className="text-end"></Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  )
}
export default MySettings

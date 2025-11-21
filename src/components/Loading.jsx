import { Spinner } from "react-bootstrap"

const Loading = () => (
  <div className="d-flex justify-content-center align-items-center w-100 mt-3">
    <Spinner animation="border" variant="success" className="mt-2" />
  </div>
)

export default Loading

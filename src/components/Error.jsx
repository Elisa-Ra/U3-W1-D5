import { useState } from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"

function AlertDismissibleExample() {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh no! Qualcosa è andato storto</Alert.Heading>
        <p>Ricarica la pagina o riprova più tardi.</p>
      </Alert>
    )
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>
}

export default AlertDismissibleExample

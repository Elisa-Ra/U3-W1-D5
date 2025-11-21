// Premendo questo pulsante si fa un toggle tra le classi d-flex e d-none in modo da mostrare/nascondere la pagina account
import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import Account from "./Account"

function AccountToggle() {
  const [visible, setVisible] = useState(false)

  return (
    <Container fluid className="w-100 text-center">
      <Button variant="danger" onClick={() => setVisible(!visible)}>
        {visible ? "Nascondi Account" : "Mostra Account"}
      </Button>

      <Container className={visible ? "d-flex mt-3" : "d-none"}>
        <Account />
      </Container>
    </Container>
  )
}

export default AccountToggle

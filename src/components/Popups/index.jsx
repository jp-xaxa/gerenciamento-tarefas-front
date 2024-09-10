import { Container } from "./styles"

export function Popups({ message, secondMessage, onClose }) {
  return (
    <Container>
      <main>
        <p>{message}</p>
        {secondMessage && <p>{secondMessage}</p>}
      </main>
      <footer></footer>
    </Container>
  )
}

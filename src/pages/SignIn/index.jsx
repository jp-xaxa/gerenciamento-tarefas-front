import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiMail, FiLock } from "react-icons/fi"

import { useAuth } from "../../hooks/auth"
import { usePopup } from "../../hooks/PopupContext"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form } from "./styles"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()
  const { showPopup } = usePopup()

  const navigate = useNavigate()

  function handleSignIn() {
    event.preventDefault()

    if (!email || !password) {
      return showPopup("Preencha todos os campos! ✍️")
    }

    signIn({ email, password })
    navigate("/")
  }

  return (
    <Container>
      <Form>
        <h1>TaskEase</h1>

        <h2>Acessar a aplicação</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta!</Link>
      </Form>
    </Container>
  )
}

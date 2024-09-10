import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { usePopup } from "../../hooks/PopupContext"

import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form } from "./styles"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { showPopup } = usePopup()

  const navigate = useNavigate()

  function handleSignUp() {
    event.preventDefault()

    if (!name || !email || !password) {
      return showPopup("Preencha todos os campos! ✍️")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        showPopup("Cadastro realizado com sucesso! 👍")

        navigate(-1)
      })
      .catch((error) => {
        if (error.response) {
          showPopup(error.response.data.message)
        } else {
          showPopup("Não foi possível cadastrar! ❌")
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>TaskEase</h1>

        <h2>Faça o seu cadastro</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

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

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}

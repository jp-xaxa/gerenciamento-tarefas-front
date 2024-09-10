import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { FiDribbble } from "react-icons/fi"
import { BiLogOut, BiHome, BiFile } from "react-icons/bi"

import { ButtonText } from "../ButtonText"

import { Container, Nav, Profile } from "./styles"

export function Menu() {
  const { user, signOut } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function handleProfile() {
    navigate("/profile")
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <div>
        <h1>TaskEase</h1>

        <Nav>
          <p>Opções:</p>

          <ul>
            <li>
              <Link to="/">
                <BiHome /> Home
              </Link>
            </li>

            <li>
              <Link to="/new-task">
                <BiFile /> Nova tarefa
              </Link>
            </li>
          </ul>
        </Nav>
      </div>

      <Profile>
        <img src={avatarUrl} alt="Foto do usuário" onClick={handleProfile} />

        <div>
          <ButtonText title={user.name} onClick={handleProfile} />
          <ButtonText title="sair" icon={BiLogOut} onClick={handleSignOut} />
        </div>
      </Profile>
    </Container>
  )
}

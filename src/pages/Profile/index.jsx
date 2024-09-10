import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import {
  FiMail,
  FiLock,
  FiUser,
  FiArrowLeft,
  FiCamera,
  FiDollarSign,
} from "react-icons/fi"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Content } from "../../components/Content"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Avatar, Form, Section, Options } from "./styles"

export function Profile() {
  const { user, updateProfile, signOut, userDelete } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()
  const [monthlyLimit, setMonthlyLimit] = useState(user.monthly_limit)

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  async function handleUpdate() {
    event.preventDefault()

    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
      monthly_limit: monthlyLimit,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })

    setPasswordOld()
    setPasswordNew()
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleDeleteAccount() {
    userDelete()
    signOut()
    navigate("/")
  }

  return (
    <Container>
      <Avatar>
        <img src={avatar} alt="Foto do usuário" />

        <label htmlFor="avatar">
          <FiCamera />

          <input id="avatar" type="file" onChange={handleChangeAvatar} />
        </label>
      </Avatar>

      <Content title="Perfil" back onOpenMenu={false}>
        <Form>
          <Section>
            <legend>Informações pessoais</legend>

            <div>
              <label htmlFor="name">Nome</label>
              <Input
                value={name}
                type="text"
                icon={FiUser}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email">E-mail</label>
              <Input
                value={email}
                type="text"
                icon={FiMail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Section>

          <Section>
            <legend>Trocar senha</legend>

            <div>
              <label htmlFor="old_password">Senha antiga</label>
              <Input
                placeholder="Senha antiga"
                type="password"
                icon={FiLock}
                onChange={(e) => setPasswordOld(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">Senha nova</label>
              <Input
                placeholder="Senha nova"
                type="password"
                icon={FiLock}
                onChange={(e) => setPasswordNew(e.target.value)}
              />
            </div>
          </Section>

          <Options>
            <Button title="Atualizar" onClick={handleUpdate} />
            <Button
              title="Excluir Conta"
              onClick={handleDeleteAccount}
              className="delete"
            />
          </Options>
        </Form>
      </Content>
    </Container>
  )
}

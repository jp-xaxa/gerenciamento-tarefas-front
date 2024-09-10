import { useNavigate } from "react-router-dom"

import { FiArrowLeft, FiMenu } from "react-icons/fi"

import { ButtonText } from "../../components/ButtonText"

import { Container } from "./styles"

export function Content({ title, children, back, onOpenMenu }) {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        {onOpenMenu && <FiMenu onClick={onOpenMenu} />}
        <h1>{title}</h1>
      </header>

      {back && (
        <ButtonText title="Voltar" icon={FiArrowLeft} onClick={handleBack} />
      )}
      {children}
    </Container>
  )
}

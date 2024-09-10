import { Container } from "./styles"

export function Button({ title, loading = false, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      <button disabled={loading}>{loading ? "Carregando..." : title}</button>
    </Container>
  )
}

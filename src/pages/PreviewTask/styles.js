import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-areas: "menu content";
`

export const Task = styled.div`
  width: 500px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  > div {
    > h1 {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.BLACK};
    }

    > p {
      margin-top: 0.625rem;
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`

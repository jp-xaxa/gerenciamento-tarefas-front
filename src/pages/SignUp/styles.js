import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BLUE_3};
`

export const Form = styled.form`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 1.875rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 0.625rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.BLUE_1};
    text-align: center;
  }

  > h2 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.COLORS.BLACK};
    text-align: center;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.BLACK};
    text-align: center;
    align-items: center;

    transition: 0.4s;

    &:hover {
      color: ${({ theme }) => theme.COLORS.BLUE_1};
    }
  }
`

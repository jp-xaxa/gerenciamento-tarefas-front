import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 9.375rem;
  padding: 0.75rem;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_200};
  color: ${({ theme }) => theme.COLORS.BLACK};
  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};

  resize: none;
  transition: 0.2s;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_2};
    background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`

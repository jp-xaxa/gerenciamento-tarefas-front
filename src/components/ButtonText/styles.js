import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: none;
  color: ${({ theme }) => theme.COLORS.BLACK};

  border: none;
  font-size: 1rem;
  cursor: pointer;

  //margin-bottom: 0.625rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.BLUE_2};
    margin-right: 0.5rem;
    font-size: 1.125rem;
  }
`

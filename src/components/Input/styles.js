import styled from "styled-components"
//import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_200};
  color: ${({ theme }) => theme.COLORS.BLACK};

  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};

  transition: 0.2s;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_2};
    background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > input {
    height: 3.125rem;
    width: 100%;

    padding: 0.75rem;
    color: ${({ theme }) => theme.COLORS.BLACK};
    background: transparent;
    border: 0;

    display: flex;
    align-items: center;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }

  > svg {
    margin-left: 1rem;
    font-size: 1rem;
  }

  .controlPassword {
    margin-right: 0.75rem;
    cursor: pointer;
  }
`

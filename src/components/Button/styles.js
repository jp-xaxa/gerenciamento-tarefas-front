import styled from "styled-components"
//import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  max-width: 12.5rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  padding: 0.75rem 1.375rem;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.BLUE_2};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  cursor: pointer;

  transition: 0.4s;

  > svg {
    font-size: 1.125rem;
  }

  > button {
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.125rem;
    white-space: nowrap;
  }

  &.delete {
    background-color: ${({ theme }) => theme.COLORS.RED};

    &:hover {
      filter: brightness(1.3);
      background-color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.COLORS.BLUE_3};
    box-shadow: 0 0 0.125rem v ${({ theme }) => theme.COLORS.BLUE_2};
    filter: saturate(120%);
    transform: scale(1.01);
  }
`

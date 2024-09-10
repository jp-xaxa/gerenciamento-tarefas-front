import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  color: black;

  border-top: 2px solid gray;
  margin-bottom: 0.625rem;

  > h2 {
    width: auto;
    display: inline-block;
    padding: 0 0.625rem;
    font-size: 1.25rem;
    margin-left: 0.625rem;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};

    transform: translateY(-50%);
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }
`

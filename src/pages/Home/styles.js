import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-areas: "menu content";
`

export const Content = styled.section`
  grid-area: content;

  width: 100%;
  height: 100vh;

  padding: 1.25rem;
  overflow-y: auto;
`

export const Header = styled.header`
  width: 100%;

  > h1 {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 1.875rem;
    margin-bottom: 0.625rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
`

export const List = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1.875rem;
`

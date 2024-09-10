import styled from "styled-components"

export const Container = styled.div`
  grid-area: menu;
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
  padding: 1.25rem 0.625rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    > h1 {
      color: ${({ theme }) => theme.COLORS.BLUE_1};
      text-align: center;
    }
  }
`

export const Nav = styled.nav`
  width: 100%;
  padding: 0 0.9375rem;

  > p {
    margin-bottom: 0.625rem;

    color: ${({ theme }) => theme.COLORS.BLACK};
    text-align: start;
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;

    list-style: none;
    text-decoration: none;

    > li {
      > a {
        color: ${({ theme }) => theme.COLORS.BLACK};

        &:hover {
          color: ${({ theme }) => theme.COLORS.BLUE_1};
        }
      }
    }
  }
`

export const Profile = styled.section`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  margin-top: auto;

  > div {
    display: flex;
    flex-direction: column;

    > button:nth-child(1) {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-bottom: 0.5rem;

      opacity: 0.8;
      transition: 0.2s;

      &:hover {
        opacity: 1;
      }
    }

    > button:nth-child(2) {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      justify-content: start;

      opacity: 0.5;
      transition: 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }

  > img {
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 50%;
    cursor: pointer;
  }
`

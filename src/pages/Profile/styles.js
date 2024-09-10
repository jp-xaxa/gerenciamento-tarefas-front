import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 15.625rem auto;
  grid-template: "avatar content";

  justify-content: center;

  position: relative;
`

export const Avatar = styled.div`
  grid-area: avatar;
  position: relative;
  width: 11.25rem;
  height: 11.25rem;
  margin: 3.125rem 0;

  > img {
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 0.25rem;
    right: 0.625rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.LIGHT_500};
    cursor: pointer;

    > svg {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > input {
      display: none;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;
  margin-top: 0.625rem;

  > button {
    width: 3.125rem;
  }
`

export const Section = styled.fieldset`
  display: flex;
  gap: 3.125rem;

  border: none;

  > legend {
    width: 100%;
    font-size: 1.25rem;
    font-weight: 500;

    margin-bottom: 0.625rem;
    padding-bottom: 0.3125rem;
    color: ${({ theme }) => theme.COLORS.BLACK};

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;

    > label {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }
`

export const Options = styled.div`
  display: flex;

  margin-top: 0.9325rem;
`

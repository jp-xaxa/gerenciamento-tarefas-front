import styled from "styled-components"
import background from "../../assets/background-new-task.png"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  padding: 50px 0;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    pointer-events: none;
    z-index: 1;
  }
`

export const Content = styled.div`
  z-index: 2;

  max-width: 850px;
  margin: 0 auto;
  padding: 1.25rem;

  background: white;
  border-radius: 0.625rem;
  box-shadow: 3px 2px 6px ${({ theme }) => theme.COLORS.BLACK};
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  > h1 {
    margin: 0.625rem 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.BLUE_2};
  }
`

export const Field = styled.fieldset`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  border: none;

  > legend {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.625rem;
  }
`

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
    > label {
      color: ${({ theme }) => theme.COLORS.BLACK};

      > span {
        font-size: 0.75rem;
        opacity: 0.8;
      }
    }
  }
`

export const InputDate = styled.input`
  height: 3.125rem;
  min-width: 250px;

  padding: 0.75rem;
  color: ${({ theme }) => theme.COLORS.BLACK};
  background-color: ${({ theme }) => theme.COLORS.LIGHT_200};
  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_2};
    background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`

export const Add = styled.button`
  padding: 0.625rem;

  border: none;
  background-color: ${({ theme }) => theme.COLORS.BLUE_2};
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.4s;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.875rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE_3};

    transform: rotateZ(-90deg);
  }
`

export const List = styled.nav`
  width: 100%;

  padding: 0.75rem;
  color: ${({ theme }) => theme.COLORS.BLACK};

  > ol {
    list-style-type: decimal;
    list-style-position: inside;

    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > p {
        > span {
          font-weight: 500;
        }
      }
    }
  }
`

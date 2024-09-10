import styled from "styled-components"

export const Container = styled.div`
  width: max-content;
  max-width: 22.5rem;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_200};
  border: none;
  border-radius: 0.625rem;
  box-shadow: 0rem 0.25rem 1rem ${({ theme }) => theme.COLORS.LIGHT_500};

  color: ${({ theme }) => theme.COLORS.BLACK};

  opacity: 0;
  visibility: hidden;
  animation: fade-in 4s linear forwards;

  > main {
    padding: 1.25rem 0.9375rem;

    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    > p {
      font-size: 1rem;
    }
  }
  > footer {
    position: absolute;
    left: 5%;
    bottom: 5%;
    margin: 0 auto;

    width: 0;
    height: 3px;
    background-image: linear-gradient(to right, #5ac8fa, #034aad);
    border-radius: inherit;

    animation: load 3.5s 0.25s linear forwards;
  }

  @keyframes fade-in {
    5% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    90% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes load {
    0% {
      width: 0;
    }

    100% {
      width: calc(100% - 10%);
    }
  }
`

import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 0.3125rem 0.625rem;
  background: ${({ theme, $finished }) =>
    $finished ? theme.COLORS.LIGHT_300 : "transparent"};
  border: ${({ theme, $finished }) =>
    $finished ? `1px solid ${theme.COLORS.BLACK}` : "none"};
  border-radius: 5px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    transform: translateY(-50%);
    pointer-events: none;
    display: ${({ $finished }) => ($finished ? "block" : "none")};
  }

  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.3125rem;

    > input {
      cursor: pointer;
    }
  }
`

export const InfosTask = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  > div {
    cursor: pointer;

    .title {
      font-size: 1rem;
      margin-bottom: 0.3125rem;
      font-weight: 500;
    }

    > footer {
      display: flex;
      align-items: center;
      gap: 0.315rem;

      > p {
        font-size: 0.75rem;
      }

      .date {
        color: ${({ theme }) => theme.COLORS.BLUE_1};
      }
    }
  }
`

export const Check = styled.button`
  width: 15px;
  height: 15px;

  background: ${({ theme, $finished }) =>
    $finished ? theme.COLORS.BLUE_1 : "transparent"};

  border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  cursor: pointer;
`

export const ListSubTasks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;

  padding: 0.3125rem 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.COLORS.BLACK};

  > ol {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.3125rem;
    justify-content: start;

    > li {
      > p {
        color: ${({ theme }) => theme.COLORS.BLACK};
      }
    }
  }
`

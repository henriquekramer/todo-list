import styled from "styled-components";

export const ContainerTask = styled.div`
  max-width: 736px;
  margin: 4rem auto 0;
`

export const TaskSummary = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    p {
      font-weight: 700;
      font-size: 14px;
      margin-right: 0.5rem;
    }

    span {
      background: var(--gray-400);
      color: var(--gray-200);
      font-size: 12px;
      font-weight: 700;
      padding: 2px 1rem;
      border-radius: 0.5rem;
    }
  }

  div:nth-child(1) {
    p {
      color: var(--blue);
    }
  }

  div:nth-child(2) {
    p {
      color: var(--purple);
    }

  }
`

export const Tasks = styled.ul`
  margin-top: 1.5rem;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding: 1rem;
    background: var(--gray-500);
    margin-bottom: 12px;
    border-radius: 0.5rem;

    p {
      margin-left: 1rem;
      font-size: 14px;
      color: var(--gray-100);
    }

    button {
      background: transparent;
      border: none;
      margin-left: auto;
    }
  
  }

`

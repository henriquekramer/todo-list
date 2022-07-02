import styled from "styled-components";

export const ContainerInput = styled.div`
  max-width: 736px;
  margin: -1.7rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  button {
    font-size:14px;
    margin-left: 0.5rem;
    padding: 1rem;
    color: var(--gray-100);
    background: var(--blue-dark);
    font-weight: 700;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    border: none;
    transition: filter 0.2s;

    img {
      margin-left: 0.5rem;
    }

    &:hover {
      filter: brightness(0.9)
    }
  }

  input {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    background: var(--gray-500);
    color: var(--gray-300);
  }
`

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

    button {
      background: transparent;
      border: none;
      margin-left: auto;
    }
  
  }

`
interface TitleTaskProps {
  isCompleted: boolean;
}

export const TitleTask = styled.p<TitleTaskProps>`
  margin-left: 1rem;
  font-size: 14px;
  color: ${(props) => props.isCompleted ? 'var(--gray-300)': 'var(--gray-100)'};
  text-decoration: ${(props) => props.isCompleted ? 'line-through': 'none'}
`

export const EmptyTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 4rem 0;
  border-top: 1px solid var(--gray-400);

  p {
    margin-top: 1rem;
    color: var(--gray-300);
    font-weight: 300;
  }

  span {
    font-weight: 700;
  }

`
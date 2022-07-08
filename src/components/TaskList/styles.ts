import styled from "styled-components";
import checkedSvg from '../../assets/checked.svg'

export const ContainerTask = styled.div`
  max-width: 736px;
  margin: 4rem auto 0;
  padding: 0 1rem;
`

export const TaskSummary = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    p {
      font-weight: 700;
      font-size: 15px;
      margin-right: 0.5rem;
    }

    span {
      background: var(--gray-400);
      color: var(--gray-200);
      font-size: 14px;
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

  input[type=checkbox]{
    width: 1rem;
    height: 1rem;
    border: 2px solid var(--blue);
    -webkit-appearance: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
  }

  input[type=checkbox]:checked {
    background-color: var(--blue);
  }

  input:checked::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: url(${checkedSvg});
    background-repeat: no-repeat;
    top: 0.2rem;
    left: 0.05rem;
  }

  li {
    display: flex;
    align-items: center;
    padding: 1rem;
    background: var(--gray-500);
    margin-bottom: 12px;
    border-radius: 0.5rem;
    transition: 0.2s;

    &:hover{
      background: var(--gray-400);
    }

    div {
      margin-left: auto;

      button {
        background: transparent;
        border: none;
        transition: 0.2s;
        color:var(--gray-300);

        &:hover{
          transform: scale(1.1);
        }

        &:nth-child(1){
          &:hover{
            color: var(--blue);
          }
        }

        &:nth-child(2){
          margin-left: 1rem;

          &:hover{
            color: var(--danger);
          }
        }
      }
    }
  }

`
interface TitleTaskProps {
  isCompleted: boolean;
}

export const TitleTask = styled.p<TitleTaskProps>`
  margin-left: 1rem;
  font-size: 15px;
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
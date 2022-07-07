import styled from "styled-components";

export const ContainerModal = styled.div`
  h2 {
    color: var(--blue);
  }

  p {
    margin: 1rem 0;
    color: var(--gray-200);
    font-size: 15px;
    font-weight: bold;
  }

  input {
    width: 100%;
    font-size: 14px;
    padding: 1rem;
    font-weight: 500;
    border-radius: 0.5rem;
    border: none;
    background: var(--gray-500);
    color: var(--gray-300);

    &:focus{
      border: 1px solid var(--blue-dark);
    }
  }

  div {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 2rem;

    button:nth-child(1){
      background: var(--gray-300);
    }

    button:nth-child(2){
      background: var(--purple-dark);

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    }

    button {
      padding: 0.7rem;
      width: 7rem;
      border: none;
      border-radius: 0.5rem;
      color: var(--gray-200);
      font-weight: 700;
      transition: 0.2s;

      &:hover {
        filter: brightness(0.9)
      }
    }
  }

`
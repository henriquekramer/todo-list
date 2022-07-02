import styled from "styled-components";

export const ContainerModal = styled.div`
  h2 {
    color: var(--blue);
  }

  p {
    margin-top: 1.5rem;
    color: var(--gray-200);
    font-size: 15px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 2rem;

    button:nth-child(1){
      background: var(--blue-dark);
    }

    button:nth-child(2){
      background: var(--danger);
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
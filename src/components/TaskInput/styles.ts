import styled from "styled-components";

export const ContainerInput = styled.div`
  max-width: 736px;
  margin: -1.7rem auto 0;
  display: flex;
  align-items: center;
  padding: 0 1rem;
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
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
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
`
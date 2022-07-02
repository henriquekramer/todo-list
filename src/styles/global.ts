import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-100: #F2F2F2;
    --gray-200: #D9D9D9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1A1A1A;
    --gray-700: #0D0D0D;
    --purple: #8284FA;
    --purple-dark: #5E60CE;
    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;
    --danger:#E25858;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1088px){
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px){
      font-size: 87.5%; //14px
    }
  }

  body{
    background: var(--gray-600);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity:0.6;
    cursor: not-allowed;
  }

  input:focus{
    outline: none;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;

    display:flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--gray-400);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8)
    }
  }
`
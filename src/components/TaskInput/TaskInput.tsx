import { Container } from "./styles";
import plus from '../../assets/plus.svg'

export function TasksData(){
  return (
    <>
      <Container>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button>
          <span>Criar</span> 
          <img src={plus} alt="plus" /> 
        </button>
      </Container>
    </>

  )
}
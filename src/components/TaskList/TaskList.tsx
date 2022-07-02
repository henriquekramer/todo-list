import { ContainerTask, Tasks, TaskSummary } from "./styles";
import trash from '../../assets/trash.svg'

export function TaskList(){
  return (
    <ContainerTask>
      <TaskSummary>
        <div>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </TaskSummary>

      <Tasks>
        <li>
          <input type="checkbox"/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam omnis voluptatum ea aut harum veniam, odit aliquid. Esse, rerum architecto!</p>
          <button><img src={trash} alt="trash" /></button>
        </li>
        <li>
          <input type="checkbox"/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam omnis voluptatum ea aut harum veniam, odit aliquid. Esse, rerum architecto!</p>
          <button><img src={trash} alt="trash" /></button>
        </li>
        <li>
          <input type="checkbox"/>
          <p>Lorem ipsum dolor, sit amet consecte</p>
          <button><img src={trash} alt="trash" /></button>
        </li>
      </Tasks>

    </ContainerTask>
  )
}
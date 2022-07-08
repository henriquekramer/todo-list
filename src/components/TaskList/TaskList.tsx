import { useTasks } from "../../hooks/useTasks";
import { ContainerTask, EmptyTasks, Tasks, TaskSummary, TitleTask } from "./styles";
import { PencilLine, Trash } from 'phosphor-react'
import clipboard from '../../assets/clipboard.svg'

export function TaskList() {
  const { tasks, handleToggleTaskCompleted, handleEditTask, handleRemoveTask} = useTasks();

  const completedTasks = tasks.filter(task => {
    return task.isCompleted
  }).length

  return (
    <ContainerTask>
        <TaskSummary>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>
          <div>
            <p>Concluídas</p>
            <span>{completedTasks} de {tasks.length}</span>
          </div>
        </TaskSummary>

        {tasks.length > 0 ? 
        
        <Tasks>
          {tasks.map(task => (
            <li key={task.id}>
              <input
               type="checkbox"
               checked={task.isCompleted} 
               readOnly
               onClick={() => handleToggleTaskCompleted(task.id)}
              />
              <TitleTask isCompleted={task.isCompleted}>{task.taskTitle}</TitleTask>
              <div>
                <button
                  onClick={()=> handleEditTask(task.id)}                
                >
                  <PencilLine size={20} />
                </button>
                <button
                  onClick={()=> handleRemoveTask(task.id)}
                >
                  <Trash size={20} />
                </button>
              </div>
            </li>
          ))}
        </Tasks> 
        : 
        <EmptyTasks>
          <img src={clipboard} alt="clipboard" />
          <p><span>Você ainda não tem tarefas cadastradas</span><br/>
          Crie tarefas e organize seus itens a fazer</p>
        </EmptyTasks> }
        
      </ContainerTask>
  )
}
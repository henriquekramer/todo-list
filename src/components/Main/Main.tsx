import { ContainerInput, ContainerTask, EmptyTasks, Tasks, TaskSummary, TitleTask } from "./styles";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import plus from '../../assets/plus.svg'
import clipboard from '../../assets/clipboard.svg'
import { PencilLine, Trash } from 'phosphor-react'
import { useTasks } from "../../hooks/useTasks";

export function Main(){
  const { handleRemoveTask, handleEditTask, handleToggleTaskCompleted, setTasks, tasks } = useTasks();
  const [taskTitle, setTaskTitle]= useState('')

  const completedTasks = tasks.filter(task => {
    return task.isCompleted
  }).length

  function handleCreateNewTask(){
    if(taskTitle === ''){
      return
    }

    const newTask = {
      taskTitle: taskTitle,
      id: uuidv4(),
      isCompleted: false,
    }

    setTasks([...tasks, newTask])
    setTaskTitle('')
  }

  const isNewTaskEmpty = taskTitle.length === 0;

  return (
    <>
      <ContainerInput>
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={e => setTaskTitle(e.target.value)}
          value={taskTitle}
        />
        <button
          type="submit"
          disabled={isNewTaskEmpty}
          onClick={handleCreateNewTask}
        >
          <span>Criar</span> 
          <img src={plus} alt="plus" /> 
        </button>
      </ContainerInput>

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
    </>

  )
}
import { ContainerInput } from "./styles";
import { useState } from "react";
import plus from '../../assets/plus.svg'
import { useTasks } from "../../hooks/useTasks";

export function TaskInput(){
  const { handleCreateNewTask } = useTasks();
  const [taskTitle, setTaskTitle]= useState('')

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
          onClick={()=> {
            handleCreateNewTask(taskTitle)
            setTaskTitle('')
          }}
        >
          <span>Criar</span> 
          <img src={plus} alt="plus" /> 
        </button>
      </ContainerInput>

    </>

  )
}
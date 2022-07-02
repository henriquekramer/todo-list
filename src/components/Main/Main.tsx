import { ContainerInput, ContainerTask, EmptyTasks, Tasks, TaskSummary, TitleTask } from "./styles";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-modal'
import plus from '../../assets/plus.svg'
import trash from '../../assets/trash.svg'
import clipboard from '../../assets/clipboard.svg'
import closeImg from '../../assets/close.svg'
import { ModalTask } from "../Modal/ModalTask";

Modal.setAppElement('#root');

interface Task{
  taskTitle: string;
  id: string;
  isCompleted: boolean;
}

function getTasksValues(){
  const storedTasks = localStorage.getItem('tasks');
  if(storedTasks){
    return JSON.parse(storedTasks);
  }
  return [];
}

export function Main(){
  const [taskTitle, setTaskTitle]= useState('')
  const [tasks, setTasks] = useState<Task[]>(getTasksValues)
  const [isOpen, setIsOpen] = useState(false)
  const [idToDelete, setIdToDelete] = useState('')

  const completedTasks = tasks.filter(task => {
    return task.isCompleted
  }).length

  useEffect(()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

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

  function handleDeleteTask(id: string){
    const updatedTasks = [...tasks].filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  function handleToggleTaskCompleted(id: string){
    const updatedTasks = [...tasks].map(task => {
      if(task.id === id){
        task.isCompleted = !task.isCompleted
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function onRequestOpen(){
    setIsOpen(true)
  }

  function onRequestClose(){
    setIsOpen(false)
  }

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
              <button
                onClick={()=> {
                  setIdToDelete(task.id)
                  onRequestOpen()
                  // handleDeleteTask(task.id)
                }}
              >
                <img src={trash} alt="trash" />
              </button>
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


      <ModalTask isOpen={isOpen} onRequestClose={onRequestClose} handleDeleteTask={handleDeleteTask} idToDelete={idToDelete}/>
    </>

  )
}
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ModalEditTask } from "../components/ModalEditTask/ModalEditTask";
import { ModalRemoveTask } from "../components/ModalRemoveTask/ModalRemoveTask";

interface TasksProviderProps {
  children: ReactNode;
}

interface Task{
  taskTitle: string;
  id: string;
  isCompleted: boolean;
}

interface TasksContextData {
  tasks: Task[];
  handleDeleteTask: (id: string) => void;
  handleToggleTaskCompleted: (id: string) => void;
  onRequestCloseRemoveModal: () => void;
  onRequestCloseEditModal: () => void;
  handleRemoveTask: (id: string) => void;
  handleEditTask:(id: string) => void;
  idToDelete: string;
  idToEdit: string;
  editTaskTitle: (newTaskTitle: string) => void;
  isOpenRemoveModal: boolean;
  isOpenEditModal: boolean;
  setTasks: (tasks: Task[])=> void
}


const TasksContext = createContext<TasksContextData>({} as TasksContextData)

function getTasksValues(){
  const storedTasks = localStorage.getItem('tasks');
  if(storedTasks){
    return JSON.parse(storedTasks);
  }
  return [];
}

export function TasksProvider( {children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(getTasksValues)
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [idToDelete, setIdToDelete] = useState('')
  const [idToEdit, setIdToEdit] = useState('')

  useEffect(()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function handleDeleteTask(id: string){
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  function handleToggleTaskCompleted(id: string){
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        task.isCompleted = !task.isCompleted
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function editTaskTitle(newTitleTask:string){
    if(newTitleTask === ''){
      return
    }
    const newTasks = tasks.map(task => {
      if(task.id === idToEdit){
        task.taskTitle = newTitleTask
      }
      return task
    })
    setTasks(newTasks)
  }

  function onRequestCloseRemoveModal(){
    setIsOpenRemoveModal(false)
  }

  function onRequestCloseEditModal(){
    setIsOpenEditModal(false)
  }

  function handleRemoveTask(id: string){
    setIsOpenRemoveModal(true)
    setIdToDelete(id)
  }

  function handleEditTask(id: string){
    setIsOpenEditModal(true)
    setIdToEdit(id)
  }

  return (
    <TasksContext.Provider value={{tasks, handleDeleteTask, handleToggleTaskCompleted, onRequestCloseRemoveModal,onRequestCloseEditModal, handleRemoveTask, handleEditTask, idToDelete, idToEdit, editTaskTitle, isOpenRemoveModal, isOpenEditModal, setTasks }}>
      {children}
      {isOpenRemoveModal && <ModalRemoveTask />}
      {isOpenEditModal && <ModalEditTask />}
    </TasksContext.Provider>
  )
}

export function useTasks():TasksContextData {
  const context = useContext(TasksContext)
  return context
}
import { createContext, useEffect, useState, ReactNode, useContext } from "react";

interface Task{
  taskTitle: string;
  id: number;
  isCompleted: boolean;
}

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  createTask: () => void;
}

const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
  );

  export function TasksProvider({ children }:TasksProviderProps ){
    const [tasks, setTasks] = useState<Task[]>([])

    function createTask(){

    }

    return (
      <TasksContext.Provider value={{tasks, createTask}} >
        {children}
      </TasksContext.Provider>
    );
  }

  export function useTasks(){
    const context= useContext(TasksContext)

    return context;
  }
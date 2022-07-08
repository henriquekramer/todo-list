import { Header } from "./components/Header/Header"
import { TaskInput } from "./components/TaskInput/TaskInput"
import { TaskList } from "./components/TaskList/TaskList"
import { TasksProvider } from "./hooks/useTasks"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <TasksProvider>
      <Header />
      <TaskInput />
      <TaskList />
      <GlobalStyle />
    </TasksProvider>
  )
}

export default App

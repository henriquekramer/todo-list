import { Header } from "./components/Header/Header"
import { TasksData } from "./components/TaskInput/TaskInput"
import { TaskList } from "./components/TaskList/TaskList"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <>
      <Header />
      <TasksData />
      <TaskList />
      <GlobalStyle />
    </>
  )
}

export default App

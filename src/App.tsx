import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { TasksProvider } from "./hooks/useTasks"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <TasksProvider>
        <Header />
        <Main />
        <GlobalStyle />
    </TasksProvider>
  )
}

export default App

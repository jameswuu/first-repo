import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {
  const todos = [
    { input: 'Eat breakfast', complete: true },
    { input: 'Go to library', complete: true },
    { input: 'Learn how to wrtie react', complete: false },
    { input: 'Pick up Donald', complete: true },
  ]

  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoInput todos={todos}/>
      <TodoList todos={todos} />
    </>
  )
}

export default App
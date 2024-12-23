import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoCard } from "./components/TodoCard"
import { TodoInput } from "./components/TodoInput"

function App() {
  const todos = [
    { input: 'Eat breakfast', complete: true },
    { input: 'Get Groceries', complete: false },
    { input: 'Learn how to wrtie react', complete: false },
    { input: 'Pick up Donald', complete: false },

  ]

  return (
    <>
      <Header todos={todos}/>
      <Tabs />
      <TodoCard />
      <TodoInput />
    </>
  )
}

export default App

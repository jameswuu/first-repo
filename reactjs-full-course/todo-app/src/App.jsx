import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

import { useState, useEffect } from "react"

function App() {
  // const todos = [
  //   { input: 'Eat breakfast', complete: true },
  //   { input: 'Go to library', complete: true },
  //   { input: 'Learn how to wrtie react', complete: false },
  //   { input: 'Pick up Donald', complete: true },
  // ]

  // React Hook
  const [todos, setTodos] = useState([
    { input: 'Eat breakfast', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState("All")

  // Handle Add button
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos , {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  // Handle, edit, update the Todo status
  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedToDo = todos[index]
    completedToDo['complete'] = true
    newTodoList[index] = completedToDo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  // Handle Delete button
  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex)=> {
      return (valIndex !== index)
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  // Save the data
  function handleSaveData(currTodos){
    localStorage.setItem('todo-app', JSON.stringify ({
      todos: currTodos
    }))
  }

  // Use Effect 
  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleCompleteTodo={handleCompleteTodo} 
                handleDeleteTodo={handleDeleteTodo} 
                selectedTab={selectedTab} 
                todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
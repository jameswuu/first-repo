import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { ShoppingList } from "./components/ShoppingList"
import { ShoppingInput } from "./components/ShoppingInput"

function App() {
  const tobuy = [
    {item: "Orange", purchased: false},
    {item: "Apples", purchased: false},
    {item: "Kiwi", purchased: false},
    {item: "Bread", purchased: true},
    {item: "Eggs", purchased: true}
  ]

  return(
    <>
      <Header tobuy={tobuy} />
      <Tabs tobuy={tobuy} />
      <ShoppingList tobuys={tobuy}/>
      <ShoppingInput />
    </>
  )
}

export default App

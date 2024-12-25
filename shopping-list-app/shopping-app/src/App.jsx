import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { ShoppingList } from "./components/ShoppingList"
import { ShoppingInput } from "./components/ShoppingInput"
import { useState } from 'react';

function App() {
  // const tobuy = [
  //   {item: "Orange", purchased: false},
  //   {item: "Apples", purchased: false},
  //   {item: "Kiwi", purchased: false},
  //   {item: "Bread", purchased: true},
  //   {item: "Eggs", purchased: true}
  // ]

  const [tobuy, setTobuy] = useState(
    [
      {item: "Orange", purchased: false}
    ]
  );

  const [selectedTab, setSelectedTab] = useState("All")

  function handleAddTobuy(input){
    const newTobuyList = [...tobuy, {item: input, purchased: false}]
    setTobuy(newTobuyList)
  }
  
  function handleEditTobuy(index){
    const editList = tobuy
    editList[index].purcahsed = true // Update the status
    setTobuy(editList) // Reassign the list 
  }
  
  function handleDeleteTobuy(index){
    ///////////(val, valIndex) <=== Why is the second one is index? and Why dont we use val.value
    let newTobuyList = tobuy.filter((val, valIndex)=> {
      return(valIndex !== index)
    })
    setTobuy(newTobuyList)
  }

  return(
    <>
      <Header tobuy={tobuy} />
      <Tabs tobuy={tobuy} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <ShoppingList tobuys={tobuy}
        selectedTab={selectedTab}
        handleEditTobuy={handleEditTobuy} 
        handleDeleteTobuy={handleDeleteTobuy}/>
      <ShoppingInput handleAddTobuy={handleAddTobuy} />
    </>
  )
}

export default App
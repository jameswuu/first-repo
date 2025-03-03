import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { ShoppingList } from "./components/ShoppingList"
import { ShoppingInput } from "./components/ShoppingInput"

import { useState, useEffect } from 'react';

function App() {
  const [tobuy, setTobuy] = useState(
    [
      {item: "Eggs", purchased: true},
      {item: "Orange", purchased: false},
      {item: "Apples", purchased: false},
      {item: "Kiwi", purchased: false},
      {item: "Bread", purchased: false},
    ]
  );

  const [selectedTab, setSelectedTab] = useState("All")


  // Functions
  function handleAddTobuy(input){
    let newTobuyList = [...tobuy, {item: input, purchased: false}];
    setTobuy(newTobuyList);
    handleSaveList(newTobuyList);
  }
  
  function handleEditTobuy(index){
    // Get the list's index
    let newTobuyList = [...tobuy];
    let editTobuy = newTobuyList[index];

    // Update and replace the list
    editTobuy["purchased"] = true;
    newTobuyList[index] = editTobuy;
    setTobuy(newTobuyList);
    handleSaveList(newTobuyList);
  }
  
  function handleDeleteTobuy(index){
    let newTobuyList = tobuy.filter((val, valIndex)=> {
      return(valIndex !== index)
    })
    setTobuy(newTobuyList);
    handleSaveList(newTobuyList);
  }


  // Save the data
  function handleSaveList(currentTobuy){
    localStorage.setItem('tobuy-app', JSON.stringify ({
      tobuys: currentTobuy
    }))
  }

  // Use Effect: Using to track events 
  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('tobuy-app')) {
      return
    }
    let db = JSON.parse(localStorage.getItem('tobuy-app'))
    console.log(db)
    setTobuy(db.tobuys)
  }, [])


  return(
    <>
      <Header tobuy={tobuy} />
      <Tabs tobuy={tobuy} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <ShoppingInput handleAddTobuy={handleAddTobuy} />
      <ShoppingList tobuys={tobuy}
                    selectedTab={selectedTab}
                    handleEditTobuy={handleEditTobuy} 
                    handleDeleteTobuy={handleDeleteTobuy}/>
    </>
  )
}

export default App
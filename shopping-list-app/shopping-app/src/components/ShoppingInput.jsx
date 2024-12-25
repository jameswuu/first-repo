import { useState } from "react"
export function ShoppingInput(props) {
    
    const { handleAddTobuy } = props
    const [inputValue, SetinputValue] = useState('')

    return(
        <div className="input-container">
            <input
                value = {inputValue}
                onChange={(e) => SetinputValue(e.target.value)} // Detect and record the changes instantly
                placeholder="Type your item here"/>
            <button onClick={()=>{
                if(!inputValue) {return} // Prevent user from entering an empty string
                handleAddTobuy(inputValue)
                SetinputValue("") // Reset the input
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
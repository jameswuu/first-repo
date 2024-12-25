import { ShoppingCards } from "./ShoppingCards"

export function ShoppingList(props) {
    const { tobuys, selectedTab } = props

    const tab = selectedTab

    const filterTobuyList = tab === "All" ? tobuys :
        tab === "Brought" ? 
            tobuys.filter(val => val.purchased):
            tobuys.filter(val => !val.purchased)

    return(
        <>
            {filterTobuyList.map((tobuy, index)=>{
                return(
                    <ShoppingCards 
                        key={tobuy.id || index}
                        tobuyIndex={index} 
                        tobuy={tobuy}
                        {...props}/>
                )
            })}
        </>
    )
}
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
            {filterTobuyList.map((tobuy, tobuyIndex)=>{
                return(
                    <ShoppingCards 
                        key={tobuyIndex}
                        tobuyIndex={tobuys.findIndex(val => val.input === tobuy.input)} 
                        tobuy={tobuy}
                        {... props}/>
                )
            })}
        </>
    )
}
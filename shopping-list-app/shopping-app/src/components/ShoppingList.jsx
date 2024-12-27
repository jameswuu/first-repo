import { ShoppingCards } from "./ShoppingCards";

export function ShoppingList(props) {
    const { tobuys, selectedTab } = props;

    const tab = selectedTab;

    const filterTobuyList = tab === "All" ? tobuys :
        tab === "Brought" ? 
            tobuys.filter(val => val.purchased) :
            tobuys.filter(val => !val.purchased);

    return(
        <>
            {filterTobuyList.map((tobuy, index)=>{
                return (
                    <ShoppingCards 
                        key={index}
                        tobuyIndex={tobuys.findIndex(val => val.item == tobuy.item)}  // Find the index in the original tobuys array
                        tobuy={tobuy}
                        {...props}
                    />
                )
            })}
        </>
    )
}
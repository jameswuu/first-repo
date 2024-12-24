export function Tabs(props) {
    const { tobuy } = props
    const tabs = ["All", "Brought", "Not Brought"]

    return (
        <nav className="tab-navigator">
            {tabs.map((tab, tabIndex)=>{
                const numOfItems = tab === "All" ? 
                    tobuy.length : 
                    tab === "Brought" ? 
                        tobuy.filter(val => val.purchased).length :
                        tobuy.filter(val => !val.purchased).length
                return(
                    <button className="tab-button" key={tabIndex}>
                        <h4>{tab} ({numOfItems})</h4>
                    </button>
                )
            })}
            <hr />
        </nav> 
    )
}
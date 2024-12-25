export function Tabs(props) {
    const { tobuy, selectedTab, setSelectedTab } = props
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
                    <button onClick={()=>{setSelectedTab(tab)}}
                    className={"tab-button" + (tab === selectedTab ? 'tab-selected' : '')}
                    key={tabIndex}
                    value={tabIndex}>
                        <h4>{tab} ({numOfItems})</h4>
                    </button>
                    
                )
            })}
            <hr />
        </nav> 
    )
}
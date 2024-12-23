export function Tabs(props) {
    const { todos } = props
    const tabs = ['All', 'Open', 'Completed']
    return (
        // Using Map to display the button three times
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === "All" ?
                    todos.length : 
                    tab === "Open" ?
                        todos.filter(val => !val.complete).length :
                        todos.filter(val => val.complete).length

                return (
                    <button key={tabIndex} value={tabIndex} className="tab-button">
                        <h4>{tab} ({numOfTasks})</h4>
                    </button>
                )
            })}

        </nav>
    )
}
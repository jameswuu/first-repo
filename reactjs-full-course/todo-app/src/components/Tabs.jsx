export function Tabs() {
    const tabs = ['all', 'Open', 'Completed']
    return (
        <nav>
            {/* Using Maps() to display the button three times */}
            {tabs.map((tab, tabIndex) => {
                return (
                    <button value={tabIndex} className="tab-button">
                        <h4>{tab} (0)</h4>
                    </button>
                )
            })}

        </nav>
    )
}
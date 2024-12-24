export function Header(props) {
    // Destructuring the array
    const {tobuy} = props
    
    const number = tobuy.length 
    const isPlural = number === 1 ? "item" : "items"
    return (
        <>
            <h1 className="text-gradient">
                There are a total of {number} {isPlural} left to buy
            </h1>
        </>
    )
}
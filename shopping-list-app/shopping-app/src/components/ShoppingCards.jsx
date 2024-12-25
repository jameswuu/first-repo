export function ShoppingCards(props) {
    const { tobuyIndex, tobuy, handleEditTobuy, handleDeleteTobuy } = props
    return(
        <>
            <div className="card tobuy-item">
                <p>{tobuy.item}</p>
                <div className="tobuy-buttons">
                    <button 
                    onClick={()=>{handleEditTobuy(tobuyIndex)}}
                    disabled={tobuy.purchased}>
                        <h6>Brought</h6>
                    </button>
                    <button onClick={()=>{handleDeleteTobuy(tobuyIndex)}}>
                        <h6>Delete</h6>
                    </button>
                </div>
            </div>
        </>
    )
}
export function ShoppingCards(props) {
    const { tobuyIndex, tobuy } = props
    return(
        <>
            <div className="card tobuy-item">
                <p>{tobuy.item}</p>
                <div className="tobuy-buttons">
                    <button disabled={tobuy.purchased}>
                        <h6>Brought</h6>
                    </button>
                    <button>
                        <h6>Delete</h6>
                    </button>
                </div>
            </div>
        </>
    )
}
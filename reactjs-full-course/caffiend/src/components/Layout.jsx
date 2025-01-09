import { useState } from "react"
import Authentication from "./Authentication"
import Modal from "./Modal"

export default function Layout(props){
    const { children } = props // Whatever is contained within the open and closing tag
    
    const [showModal, setShowModal] = useState(false)

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            <button onClick={()=>{setShowModal(true)}}>
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by James Wu using the <a href="http://www.fantacss.smljames.com" target="_blank">Fantacss</a></p>
        </footer>
    )

    return(
        <>
            {showModal && (
                <Modal handleCloseModal={()=>{setShowModal(false)}}>
                    <Authentication />
                </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}
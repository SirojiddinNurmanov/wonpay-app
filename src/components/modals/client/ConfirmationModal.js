import React from "react"
import { Link } from "react-router-dom"
import Modal from "react-bootstrap/Modal"

const ConfirmationModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton> </Modal.Header>
            <Modal.Body>
                <div className="my-modal">
                    <h3>Sizning so'rovingiz qabul qilindi</h3>{" "}
                    <p>Iltimos kuryerimiz aloqaga chiqishini kuting</p>
                    <Link to="/">
                        <button>Mening Sahifam</button>
                    </Link>
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default ConfirmationModal

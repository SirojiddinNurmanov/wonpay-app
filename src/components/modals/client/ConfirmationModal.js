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
            backdrop="static"
        >
            <Modal.Header>
                <Modal.Title className="text-center">
                    <div className="logo">
                        <img src="/assets/img/icons/logo.png" alt="logo" />
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <h3>Sizning so'rovingiz qabul qilindi</h3>
                    <div className="text-body">Iltimos kuting</div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/" className="my-modal">
                    <button className="confirmation-button">Mening Sahifam</button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}
export default ConfirmationModal

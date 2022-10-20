import React from "react"
import Modal from "react-bootstrap/Modal"

const AlertModal = (props) => {
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
                    <h3>So'rovlar summasi taklif summasidan oshib ketdi</h3>
                    <div className="text-body">Iltimos tekshiring</div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="confirmation-button" onClick={() => props.onHide()}>Yopish</button>
            </Modal.Footer>
        </Modal>
    )
}
export default AlertModal

import React, { memo } from "react"
import Modal from "react-bootstrap/Modal"

const NotificationDetailsModal = (props) => {
    return (
        <Modal
            {...props}
            centered
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-center">
                    <div className="logo">
                        <img src="/assets/img/icons/logo.png" alt="logo" />
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <h3>{props.title}</h3>
                    <p>{props.body}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="modal-button" onClick={props.onHide}>Yopish</button>
            </Modal.Footer>
        </Modal>
    )
}

export default memo(NotificationDetailsModal)

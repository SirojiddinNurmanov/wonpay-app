import React, { memo } from "react"
import Modal from "react-bootstrap/Modal"

const NotificationDetailsModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
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
                    <h5>Palonchi siz taklif qilgan kursga rozilik bildirdi:</h5>
                    <h6><strong>$1= ￦1.250</strong></h6>
                    <h6><strong>￦12.500.000 = $10.000 </strong></h6>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="modal-button" onClick={props.onHide}>Yopish</button>
            </Modal.Footer>
        </Modal>
    )
}

export default memo(NotificationDetailsModal)

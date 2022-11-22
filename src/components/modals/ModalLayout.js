import React, { memo } from "react"
import { Link } from "react-router-dom"
import Modal from "react-bootstrap/Modal"

const ModalLayout = ({ children, buttons, show, onHide }) => (
    <Modal
        show={show}
        onHide={onHide}
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
            {children}
        </Modal.Body>
        <Modal.Footer>
            {buttons && buttons.map(({ title, eventHandler, isLink, linkURL, secondary = false, disabled = false }) => (
                isLink ? (
                    <Link to={linkURL} key={title}>
                        <button className={"modal-button" + (secondary ? " secondary" : "")}>{title}</button>
                    </Link>
                ) : (
                    <button key={title} className={"modal-button" + (secondary ? " secondary" : "") + (disabled ? " disabled" : "")} onClick={eventHandler}>{title}</button>
                )
            ))}
        </Modal.Footer>
    </Modal>
)

export default memo(ModalLayout)
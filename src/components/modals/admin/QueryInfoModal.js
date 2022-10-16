import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"

import { formatAmount } from "../../../helpers"

const QueryInfoModal = ({ show, onHide, id, user, amount, payment_type, card_info_type, card_info_sms, card_info_image }) => {
    const [zoomed, setZoomed] = useState(false)

    const closeAndZoomOut = () => {
        onHide()
        setZoomed(false)
    }

    return (
        <Modal
            show={show}
            onHide={closeAndZoomOut}
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
                <div className="my-modal">
                    <div className="component71-header">
                        <h1>{amount ? "￦ " + formatAmount(amount) : ""}</h1>
                        <h3>{(user?.first_name ? user?.first_name : "") + " " + (user?.last_name ? user?.last_name : "")}</h3>
                    </div>
                    {payment_type === 1 && (
                        <div className="request-modal-item">
                            <div className="container">
                                {payment_type === 1 && (
                                    <div className="row">
                                        <div className={"col-" + (card_info_type === 1 ? "12" : "9")}>
                                            <div className="card_info_block">
                                                {card_info_type === 1 ? (
                                                    <img onClick={() => setZoomed(!zoomed)} className={"card-image" + (zoomed ? " zoomed" : "")} src={card_info_image} alt="Card" />
                                                ) : (
                                                    <pre>
                                                        {card_info_sms}
                                                    </pre>
                                                )}
                                            </div>
                                        </div>
                                        {card_info_type === 0 && (
                                            <div className="col-3">
                                                <img
                                                    src="/assets/img/icons/copy.png"
                                                    alt="copy"
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </Modal.Body >
            <Modal.Footer>
                <button className="modal-button" onClick={closeAndZoomOut} >Yopish</button>
            </Modal.Footer>
        </Modal >
    )
}
export default QueryInfoModal

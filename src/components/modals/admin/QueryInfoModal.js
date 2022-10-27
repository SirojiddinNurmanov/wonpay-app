import React, { memo, useState } from "react"

import { formatAmount } from "../../../helpers"

import ModalLayout from "../ModalLayout"

const QueryInfoModal = ({ show, onHide, id, user, amount, payment_type, card_info_type, card_info_sms, card_info_image }) => {
    const [zoomed, setZoomed] = useState(false)

    const closeAndZoomOut = () => {
        onHide()
        setZoomed(false)
    }

    const buttons = [
        {
            title: "Yopish",
            eventHandler: () => closeAndZoomOut()
        }
    ]

    return (
        <ModalLayout buttons={buttons} show={show}>
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
        </ModalLayout>
    )
}

export default memo(QueryInfoModal)

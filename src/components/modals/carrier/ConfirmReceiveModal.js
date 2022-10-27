import React, { memo } from "react"

import ModalLayout from "../ModalLayout"

const ConfirmReceiveModal = (props) => {
    const buttons = [
        {
            title: "Ortga",
            eventHandler: () => props.onHide()
        },
        {
            title: "Oldim",
            eventHandler: () => props.onHide()
        }
    ]

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="my-modal">
                <h1>Farruh Soipov</h1>
                <h3>+99893 400 12 05</h3>
                <h1>+$5 216.45</h1>
                <div className="modal-input">
                    <input type="text" />
                    <span>$</span>
                </div>
                <div className="modal-input">
                    <input type="text" />
                    <span>so'm</span>
                </div>
                <div className="modal-input">
                    <input type="text" />
                    <span>kurs</span>
                </div>
            </div>
        </ModalLayout>
    )
}

export default memo(ConfirmReceiveModal)

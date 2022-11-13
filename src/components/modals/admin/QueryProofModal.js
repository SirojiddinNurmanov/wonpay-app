import React, { memo } from "react"

import ModalLayout from "../ModalLayout"

const QueryProofModal = ({ show, onHide, proof_image }) => {
    const buttons = [
        {
            title: "Yopish",
            eventHandler: () => {
                onHide()
            }
        }
    ]

    return (
        <ModalLayout buttons={buttons} show={show} onHide={onHide}>
            <div className="my-modal">
                {proof_image && (
                    <img src={proof_image} alt="Proof" />
                )}
            </div>
        </ModalLayout>
    )
}

export default memo(QueryProofModal)

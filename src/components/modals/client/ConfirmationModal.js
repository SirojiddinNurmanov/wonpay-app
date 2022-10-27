import React, { memo } from "react"

import ModalLayout from "../ModalLayout"

const ConfirmationModal = (props) => {
    const buttons = [
        {
            title: "Mening Sahifam",
            isLink: true,
            linkURL: "/"
        }
    ]

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="text-center">
                <h3>Sizning so'rovingiz qabul qilindi</h3>
                <div className="text-body">Iltimos kuting</div>
            </div>
        </ModalLayout>
    )
}

export default memo(ConfirmationModal)

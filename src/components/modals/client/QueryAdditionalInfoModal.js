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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequuntur!
            </div>
        </ModalLayout>
    )
}

export default memo(ConfirmationModal)

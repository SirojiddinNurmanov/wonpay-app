import React, { memo } from "react"

import ModalLayout from "../ModalLayout"

const NotificationDetailsModal = (props) => {
    const buttons = [
        {
            title: "Yopish",
            eventHandler: () => props.onHide()
        }
    ]

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="text-center">
                <h5>Palonchi siz taklif qilgan kursga rozilik bildirdi:</h5>
                <h6><strong>$1= ￦1.250</strong></h6>
                <h6><strong>￦12.500.000 = $10.000 </strong></h6>
            </div>
        </ModalLayout>
    )
}

export default memo(NotificationDetailsModal)

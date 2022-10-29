import React, { memo } from "react"
import { useNavigate } from "react-router-dom"
import ModalLayout from "../ModalLayout"

const CloseOfferModal = (props) => {
    const navigate = useNavigate()

    const buttons = [
        {
            title: "Ha",
            eventHandler: () =>  {
                props.closeOfferHandler()
                props.onHide()
                navigate("/processes")
            }
        },
        {
            title: "Yo'q",
            eventHandler: props.onHide
        }
    ]

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="text-center">
                <h3>Ushbu jarayonni yopishni hohlaysizmi?</h3>
            </div>
        </ModalLayout>
    )
}

export default memo(CloseOfferModal)

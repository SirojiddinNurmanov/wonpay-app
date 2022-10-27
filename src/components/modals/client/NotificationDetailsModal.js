import React, { memo } from "react"
import { useDispatch } from "react-redux"

import { setQueryRate, rejectQueryRate, setOfferRate, rejectOfferRate, setNotificationAsRead } from "../../../store/actions"

import ModalLayout from "../ModalLayout"

const NotificationDetailsModal = (props) => {
    const dispatch = useDispatch()

    const accept = () => {
        if (props.status === 0) {
            if (props.process.process_type === 0) {
                dispatch(setQueryRate(props.process.id))
            } else {
                dispatch(setOfferRate(props.process.id))
            }
        }
        dispatch(setNotificationAsRead(props.id))
        props.onHide()
    }

    const reject = () => {
        if (props.status === 0) {
            if (props.process.process_type === 0) {
                dispatch(rejectQueryRate(props.process.id))
            } else {
                dispatch(rejectOfferRate(props.process.id))
            }
        }
        dispatch(setNotificationAsRead(props.id))
        props.onHide()
    }

    const buttons = (props.type === 1 && props.status === 0) ? [
        {
            title: "Roziman",
            eventHandler: () => accept()
        },
        {
            title: "Noroziman",
            eventHandler: () => reject()
        }
    ] : [
        {
            title: "Yopish",
            eventHandler: () => props.onHide()
        }
    ]

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="text-center">
                <h5 dangerouslySetInnerHTML={{ __html: props.title }} />
                <p dangerouslySetInnerHTML={{ __html: props.body }} />
            </div>
        </ModalLayout>
    )
}

export default memo(NotificationDetailsModal)

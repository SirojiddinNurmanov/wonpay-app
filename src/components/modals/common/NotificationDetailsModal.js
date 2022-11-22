import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { setQueryRate, rejectQueryRate, setOfferRate, rejectOfferRate, setNotificationAsRead, confirmGivenMoney, rejectGivenMoney, clientConfirmGivenMoney, clientRejectGivenMoney } from "../../../store/actions"

import ModalLayout from "../ModalLayout"

const NotificationDetailsModal = (props) => {
    const { role } = useSelector(state => state.app.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const confirmMoney = () => {
        if (role === 'client') {
            dispatch(clientConfirmGivenMoney(props.process_id))
        } else {
            dispatch(confirmGivenMoney(props.process_id))
        }
        dispatch(setNotificationAsRead(props.id))
        props.onHide()
    }

    const rejectMoney = () => {
        if (role === 'client') {
            dispatch(clientRejectGivenMoney(props.process_id))
        } else {
            dispatch(rejectGivenMoney(props.process_id))
        }
        dispatch(setNotificationAsRead(props.id))
        props.onHide()
    }

    let buttons = []

    if (props.type === 1 && props.status === 0) {
        buttons = [
            {
                title: "Roziman",
                eventHandler: () => accept()
            },
            {
                title: "Noroziman",
                eventHandler: () => reject()
            }
        ]
    } else if (props.type === 2 && props.status === 0) {
        buttons = [
            {
                title: "Ha",
                eventHandler: () => confirmMoney()
            },
            {
                title: "Yo'q",
                eventHandler: () => rejectMoney()
            }
        ]
    } else {
        buttons = [
            {
                title: props.action_type === 0 ? "Yopish" : "Ko'rish",
                eventHandler: () => {
                    switch (props.action_type) {
                        case 1:
                            navigate(`/queries/${props.process_id}`)                            
                            break;
                        case 2:
                            navigate(`/offers/${props.process_id}`)
                            break;
                        case 3:
                            navigate(`/reports`)
                            break;
                    }

                    props.onHide()
                }
            }
        ]
    }

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

import React, { memo } from "react"
import { useDispatch } from "react-redux"
import Modal from "react-bootstrap/Modal"
import { setQueryRate, rejectQueryRate, setOfferRate, rejectOfferRate, setNotificationAsRead } from "../../../store/actions"

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

    return (
        <Modal
            {...props}
            centered
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-center">
                    <div className="logo">
                        <img src="/assets/img/icons/logo.png" alt="logo" />
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <h5 dangerouslySetInnerHTML={{ __html: props.title }} />
                    <p dangerouslySetInnerHTML={{ __html: props.body }} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                {props.type === 1 && props.status === 0 ? (
                    <div className="model-buttons">
                        <button className="modal-button" onClick={accept}>Roziman</button>
                        <button className="modal-button reject" onClick={reject}>Noroziman</button>
                    </div>
                ) : (
                    <button className="modal-button" onClick={props.onHide}>Yopish</button>
                )}
            </Modal.Footer>
        </Modal >
    )
}

export default memo(NotificationDetailsModal)

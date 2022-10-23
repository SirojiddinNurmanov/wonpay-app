import React, { memo, useState } from "react"
import { useDispatch } from "react-redux"
import Modal from "react-bootstrap/Modal"

import { changeQueryRate } from '../../../store/actions'


const QueryRateModal = (props) => {
    const [newValue, setNewValue] = useState()
    const dispatch = useDispatch()

    const confirmRate = () => {
        dispatch(changeQueryRate(props.id, newValue))
        props.onHide()
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-center">
                    <div className="logo">
                        <img src="/assets/img/icons/logo.png" alt="logo" />
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="my-modal">
                    <div className="offer-modal-input">
                        <div className="put-money-input">
                            <label htmlFor="put_money">Kurs:</label>
                            <input type="number" defaultValue={props.exchange_rate} onChange={({ target }) => setNewValue(target.value)} />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="modal-button" onClick={confirmRate}>Yopish</button>
            </Modal.Footer>
        </Modal >
    )
}

export default memo(QueryRateModal)

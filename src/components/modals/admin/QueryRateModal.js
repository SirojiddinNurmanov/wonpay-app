import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { changeQueryRate } from '../../../store/actions'

import Modal from "react-bootstrap/Modal"

const QueryRateModal = (props) => {
    const [newValue, setNewValue] = useState()
    const dispatch = useDispatch()
    const changeRate = () => {
        dispatch(changeQueryRate(props.id, newValue))
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
                            <input type="number" defaultValue={props.exchange_rate} onChange={ ({target}) => setNewValue(target.value)} />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="modal-button" onClick={() => { changeRate(); props.onHide() }}>Yopish</button>
            </Modal.Footer>
        </Modal >
    )
}
export default QueryRateModal

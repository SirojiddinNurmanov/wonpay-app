import React, { memo, useState } from "react"
import { useDispatch } from "react-redux"

import { changeQueryRate } from '../../../store/actions'

import ModalLayout from "../ModalLayout"

const QueryRateModal = (props) => {
    const [newValue, setNewValue] = useState()
    const dispatch = useDispatch()

    const confirmRate = () => {
        dispatch(changeQueryRate(props.id, newValue))
        props.onHide()
    }

    const buttons = [
        {
            title: "Tasdiqlash",
            eventHandler: () => confirmRate()
        }
    ]

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="my-modal">
                <div className="offer-modal-input">
                    <div className="put-money-input">
                        <label htmlFor="put_money">Kurs:</label>
                        <input type="number" defaultValue={props.exchange_rate == 0 ? "" : props.exchange_rate} onChange={({ target }) => setNewValue(target.value)} />
                    </div>
                </div>
            </div>
        </ModalLayout>
    )
}

export default memo(QueryRateModal)

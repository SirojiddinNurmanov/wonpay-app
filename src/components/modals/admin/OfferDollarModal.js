import React, { memo, useState } from "react"
import { useDispatch } from "react-redux"

import { changeOfferRate } from '../../../store/actions'

import ModalLayout from "../ModalLayout"

const OfferDollarModal = (props) => {
    const [newValue, setNewValue] = useState(props.buy_rate > 0 ? (props.amount / props.buy_rate).toFixed(2) : 0)
    const dispatch = useDispatch()

    const confirmRate = () => {
        dispatch(changeOfferRate(props.id, parseInt(props.amount / newValue), props.sell_rate))
        props.onHide()
    }

    const buttons = [
        {
            title: "Yopish",
            eventHandler: () => confirmRate()
        }
    ]

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="my-modal">
                <div className="offer-modal-input">
                    <div className="put-money-input">
                        <label htmlFor="put_money">Dollarda:</label>
                        <input type="number" value={newValue} onChange={({ target }) => setNewValue(target.value)} />
                    </div>
                </div>
            </div>
        </ModalLayout>
    )
}

export default memo(OfferDollarModal)

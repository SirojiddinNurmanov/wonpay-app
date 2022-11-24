import React, { memo, useState } from "react"
import { useDispatch } from "react-redux"

import { giverGiveMoney } from "../../../store/actions"

import ModalLayout from "../ModalLayout"

const GiveMoneyModal = (props) => {
    const [amount_usd, setAmountUSD] = useState()
    const [amount_uzs, setAmountUZS] = useState()
    const [rate, setRate] = useState()
    const dispatch = useDispatch()

    const clearFields = () => {
        setAmountUSD("")
        setAmountUZS("")
        setRate("")
    }

    const buttons = [
        {
            title: "Berdim",
            eventHandler: () => {
                if ((amount_usd && !amount_uzs && !rate) || (amount_usd && amount_uzs && rate) || (!amount_usd && amount_uzs && rate)) {
                        dispatch(giverGiveMoney(props.user_id, amount_usd, amount_uzs, rate))                        
                    clearFields()
                    props.onHide()
                }
            },
            disabled: !((amount_usd && !amount_uzs && !rate) || (amount_usd && amount_uzs && rate) || (!amount_usd && amount_uzs && rate))
        },
        {
            title: "Bekor Qilish",
            eventHandler: () => {
                clearFields()
                props.onHide()
            },
            secondary: true
        }
    ]

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="give-money-modal text-center">
                <h3>Miqdorni kiriting:</h3>
                <div className="input-field">
                    <span>$</span>
                    <input className="amount-input" type="number" defaultValue={amount_usd} onChange={({ target }) => setAmountUSD(target.value)} />
                </div>
                <div className="input-field">
                    <span>So'm</span>
                    <input className="amount-input" type="number" defaultValue={amount_uzs} onChange={({ target }) => setAmountUZS(target.value)} />
                </div>
                <div className="input-field">
                    <span>Kurs</span>
                    <input className="amount-input" type="number" defaultValue={rate} onChange={({ target }) => setRate(target.value)} />
                </div>
            </div>
        </ModalLayout>
    )
}

export default memo(GiveMoneyModal)

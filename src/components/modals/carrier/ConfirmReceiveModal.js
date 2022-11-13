import React, { memo, useState } from "react"

import ModalLayout from "../ModalLayout"

const ConfirmReceiveModal = (props) => {
    const [amount_usd, setAmountUSD] = useState()
    const [amount_uzs, setAmountUZS] = useState()
    const [rate, setRate] = useState()
    const buttons = [
        {
            title: "Topshirish",
            eventHandler: () => props.onHide()
        },
        {
            title: "Bekor qilish",
            eventHandler: () => props.onHide(),
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
                <br />
                <div className="input-field">
                    <span>So'm</span>
                    <input className="amount-input" type="number" defaultValue={amount_uzs} onChange={({ target }) => setAmountUZS(target.value)} />
                </div>
                <br />
                <div className="input-field">
                    <span>Kurs</span>
                    <input className="amount-input" type="number" defaultValue={rate} onChange={({ target }) => setRate(target.value)} />
                </div>
            </div>
        </ModalLayout>
    )
}

export default memo(ConfirmReceiveModal)

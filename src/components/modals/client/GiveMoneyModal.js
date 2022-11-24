import React, { memo } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { clientGiveMoney } from "../../../store/actions"

import ModalLayout from "../ModalLayout"

const GiveMoneyModal = (props) => {
    const [amount_usd, setAmountUSD] = useState()
    const [amount_uzs, setAmountUZS] = useState()
    const [rate, setRate] = useState()
    const { allUsers } = useSelector(state => state.app)
    const [carrierId, setCarrierId] = useState(allUsers?.length === 1 ? allUsers[0].id : "0")
    const dispatch = useDispatch()

    const clearFields = () => {
        setAmountUSD("")
        setAmountUZS("")
        setCarrierId(0)
    }

    const buttons = [
        {
            title: "Tasdiqlash",
            eventHandler: () => {
                // eslint-disable-next-line
                if (((amount_usd && !amount_uzs && !rate ) || (amount_usd && amount_uzs && rate) || (!amount_usd && amount_uzs && rate)) && carrierId != "0") {
                    dispatch(clientGiveMoney(carrierId, amount_usd, amount_uzs, rate))
                    clearFields()
                    props.onHide()
                }
            },
            // eslint-disable-next-line
            disabled: !(((amount_usd && !amount_uzs && !rate ) || (amount_usd && amount_uzs && rate) || (!amount_usd && amount_uzs && rate)) && carrierId != "0")
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
                <h3>Pul qabul qiluvchi:</h3>
                <select defaultValue={carrierId} onChange={({ target }) => setCarrierId(target.value)}>
                    <option value="0">Tanlang</option>
                    {allUsers && allUsers.filter(user => ['admin', 'superadmin', 'carrier'].includes(user.role)).map(carrier => (
                        <option key={carrier.id} value={carrier.id}>{carrier.first_name}</option>
                    ))}
                </select>
            </div>
        </ModalLayout>
    )
}

export default memo(GiveMoneyModal)

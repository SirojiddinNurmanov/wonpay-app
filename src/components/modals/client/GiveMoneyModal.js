import React, { memo } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { clientGiveMoney } from "../../../store/actions"

import ModalLayout from "../ModalLayout"

const GiveMoneyModal = (props) => {
    const [amount, setAmount] = useState()
    const { carriers } = useSelector(state => state.app)
    const [carrierId, setCarrierId] = useState(carriers?.length === 1 ? carriers[0].id : "0")
    const dispatch = useDispatch()

    const buttons = [
        {
            title: "Tasdiqlash",
            eventHandler: () => {
                dispatch(clientGiveMoney(carrierId, amount))
                setAmount("")
                setCarrierId(0)
                props.onHide()
            }
        },
        {
            title: "Bekor Qilish",
            eventHandler: () => {
                setAmount("")
                setCarrierId(0)
                props.onHide()
            },
            secondary:  true
        }
    ]

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="give-money-modal text-center">
                <h3>Miqdorni kiriting:</h3>
                <div className="input-field">
                    <span>$</span>
                    <input className="amount-input" type="number" defaultValue={amount} onChange={({ target }) => setAmount(target.value)} />
                </div>
                <h3>Pul qabul qiluvchi:</h3>
                <select defaultValue={carrierId} onChange={({ target }) => setCarrierId(target.value)}>
                    <option value="0">Tanlang</option>
                    {carriers && carriers.map(carrier => (
                        <option key={carrier.id} value={carrier.id}>{carrier.first_name}</option>
                    ))}
                    <option value="-1">Admin</option>
                </select>
            </div>
        </ModalLayout>
    )
}

export default memo(GiveMoneyModal)

import React, { memo, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { changeQueryRate, getCarriers, setProcessCarrier } from '../../../store/actions'

import ModalLayout from "../ModalLayout"

const QueryRateModal = (props) => {
    const [newValue, setNewValue] = useState(false)
    const { carriers } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCarriers())
        // eslint-disable-next-line
    }, [])

    const confirmRate = () => {
        if (props.carrier_id === null) {
            if (newValue) {
                dispatch(changeQueryRate(props.id, newValue))
            }
            props.onHide()
        }
    }

    const selectCarrier = ({ target: { value } }) => {
        dispatch(setProcessCarrier(props.id, value))
    }

    const buttons = [
        {
            title: "Tasdiqlash",
            eventHandler: () => confirmRate(),
            disabled: props.carrier_id === null || !newValue
        },
        {
            title: "Yopish",
            eventHandler: () => props.onHide()
        }
    ]

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="my-modal">
                <div className="offer-modal-input">
                    <div className="put-money-input">
                        <label htmlFor="put_money">Kurs:</label>
                        <input type="number" defaultValue={props.exchange_rate == 0 ? "" : props.exchange_rate} onChange={({ target }) => setNewValue(target.value)} />
                        {props.carrier_id ? "" : (
                            <>
                                <div className="process-title">Pulni Oluvchi Kuryer:</div>
                                <div className="process-carrier-list">
                                    <select onChange={selectCarrier} className="underlined text-center" value={props?.carrier_id ?? 0}>
                                        {carriers?.length > 1 ? (
                                            <>
                                                <option value="0">Tanlash</option>
                                                {carriers.map(({ id, first_name, last_name }) => (
                                                    <option key={id} value={id}>{first_name + (last_name ? " " + last_name : "")}</option>
                                                ))}
                                            </>
                                        ) : (
                                            <option>Kuryer yo'q</option>
                                        )}
                                    </select>
                                </div>
                                {props?.carrier_id ? "" : (
                                    <div className="error-message small text-center red">Iltimos kuryerni tanlang</div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </ModalLayout >
    )
}

export default memo(QueryRateModal)

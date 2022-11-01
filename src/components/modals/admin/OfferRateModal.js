import React, { memo, useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { changeOfferRate } from "../../../store/actions"

import WhiteLine from "../../common/WhiteLine"
import ModalLayout from "../ModalLayout"


const OfferRateModal = (props) => {
    const [newBuyRate, setNewBuyRate] = useState()
    const [newSellRate, setNewSellRate] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        setNewBuyRate(props.buy_rate)
        setNewSellRate(props.sell_rate)
    }, [props.show])

    const changeSellRateValue = ({ target: { value } }) => {
        if (value < 10000) {
            setNewSellRate(value)
        }
    }

    const changeBuyRateValue = ({ target: { value } }) => {
        if (value < 10000) {
            setNewBuyRate(value)
        }
    }

    const confirmRate = () => {
        dispatch(changeOfferRate(props.id, newBuyRate, newSellRate))
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
            <div className="offer-modal-input">
                <div className="put-money-input">
                    <label>Olish:
                        <input type="number" defaultValue={props.buy_rate == 0 ? "" : props.buy_rate} onChange={changeBuyRateValue} />
                    </label>
                </div>
            </div>
            <WhiteLine modal={true} />
            <div className="offer-modal-input">
                <div className="put-money-input">
                    <label>Sotish:
                        <input type="number" defaultValue={props.sell_rate == 0 ? "" : props.sell_rate} onChange={changeSellRateValue} />
                    </label>
                </div>
            </div>
        </ModalLayout>
    )
}

export default memo(OfferRateModal)

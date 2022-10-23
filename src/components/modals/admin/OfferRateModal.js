import React, { memo, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import Modal from "react-bootstrap/Modal"

import { changeOfferRate } from "../../../store/actions"

import WhiteLine from "../../common/WhiteLine"

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
                <div className="offer-modal-input">
                    <div className="put-money-input">
                        <label>Olish:
                            <input type="number" defaultValue={props.buy_rate} onChange={changeBuyRateValue} />
                        </label>
                    </div>
                </div>
                <WhiteLine modal={true} />
                <div className="offer-modal-input">
                    <div className="put-money-input">
                        <label>Sotish:
                            <input type="number" defaultValue={props.sell_rate} onChange={changeSellRateValue} />
                        </label>
                    </div>
                </div>
                <WhiteLine modal={true} />
            </Modal.Body>
            <Modal.Footer>
                <button className="modal-button" onClick={confirmRate}>Yopish</button>
            </Modal.Footer>
        </Modal>
    )
}

export default memo(OfferRateModal)
